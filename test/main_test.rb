require_relative 'test_setup'

describe Events::Event do
  it 'overrides' do
    ev = Events::Event.new(:purchase, :target)
    ev.override(action: :invalid, hoge: :fuga)
    _(ev.action).must_equal(:invalid)
  end
end

describe Aggregates::Schedule do
  before do
    setups = TestHelper.setup
    @cs_book = setups[:cs_book]
    @cookie = setups[:cookie]
  end

  it 'overrides past overlapping schedules' do
    ev3 = Events::Event.new(:schedule, @cs_book, [], { as: :study, from: 9, till: 10})
    ev4 = Events::Event.new(:schedule, @cookie,  [], { as: :eat,   from: 10, till: 12})
    ev5 = Events::Event.new(:schedule, @cs_book, [], { as: :study, from: 11, till: 12})

    _(Aggregates::Schedule.new([ev3, ev4, ev5]).call.to_s).must_equal(
      " 9 - 10 | study cs_book (cs_skill +10, energy -5)\n"+
      "11 - 12 | study cs_book (cs_skill +10, energy -5)"
    )
  end
end

describe 'Game CLI mode - end to end' do
  before do
    setups = TestHelper.setup
    @cs_book = setups[:cs_book]
    @cookie = setups[:cookie]
    @events = setups[:events]
  end

  it "simulates the single game play" do
    game = Game.new
    money_space = Constructs::Space.new(:money)

    ev3 = Events::Event.new(:schedule, @cs_book, [], { as: :study, from: 9, till: 10})
    ev4 = Events::Event.new(:schedule, @cookie,  [], { as: :eat,   from: 10, till: 12})

    _(Aggregates::Schedule.new([ev3, ev4]).call.to_s).must_equal(
      " 9 - 10 | study cs_book (cs_skill +10, energy -5)\n" +
      "10 - 12 | eat cookie (energy +28)"
    )

    ev5 = Events::GameTime.new(:tick, :game_time, [], { speed_val: 1 })
    ev6 = Events::GameTime.new(:tick, :game_time, [], { speed_val: 2 })

    produced_events = Aggregates::TimeProgress.new([ev3, ev4, ev5, ev6]).call.events

    _(produced_events.group_by(&:action)[:study].first.target).must_equal @cs_book
    _(produced_events.group_by(&:action)[:eat].first.target).must_equal @cookie

    result = Aggregates::Stats.new(game.add_events(produced_events)).call

    _(result.to_h).must_equal(
      {
        :stats=>{:money=>"100", :energy=>"28"},
        :violations=>[]
      }
    )

    @software_engineer = Static::Allocatable.new(
      :software_engineer,
      :job
    )
    @software_engineer.add_possible_action(
      :work,
      [Constructs::Vector.new(money_space, 123)],
      []
    )

    work = Events::Event.new(:schedule, @software_engineer, [], { as: :work,   from: '', till: ''})

    # ev5 and ev6 are before the work event time
    produced_events = Aggregates::TimeProgress.new([work, ev5, ev6]).call.events
    _(produced_events.empty?).must_equal true

    ev7 = Events::GameTime.new(:tick, :game_time, [], { speed_val: 1 })
    ev8 = Events::GameTime.new(:tick, :game_time, [], { speed_val: 1 })
    ev9 = Events::GameTime.new(:tick, :game_time, [], { speed_val: 1 })

    produced_events = Aggregates::TimeProgress.new([work, ev7, ev8, ev9]).call.events
    _(produced_events.length).must_equal 2
    _(produced_events.first.action).must_equal :work
    _(produced_events.first.target).must_equal @software_engineer

    result = Aggregates::Stats.new(game.add_events(produced_events)).call

    _(result.to_h).must_equal(
      {
        stats: { money: "346", energy: "28" },
        violations: []
      }
    )
  end

  it "terminates if terminating space attr goes zero" do
    result = Aggregates::Stats.new(Game.new.add_events(@events)).call
    _(result.violations).must_equal(
      ["Energy cannot go below 0"]
    )
  end
end