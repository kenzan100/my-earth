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
    money_space = Constructs::Space.new(:money)
    purchase_vec = Constructs::Vector.new(money_space, 10)

    ev1 = Events::Event.new(:purchase, @cs_book, [purchase_vec])
    ev2 = Events::Event.new(:purchase, @cookie,  [purchase_vec])

    _(Aggregates::Inventory.new([ev1, ev2]).call.to_s).must_equal(
      "cs_book * 1 | permanent\ncookie * 1 | consumable"
    )

    ev3 = Events::Event.new(:schedule, @cs_book, [], { as: :study, from: 9, till: 10})
    ev4 = Events::Event.new(:schedule, @cookie,  [], { as: :eat,   from: 10, till: 12})

    _(Aggregates::Schedule.new([ev3, ev4]).call.to_s).must_equal(
      " 9 - 10 | study cs_book (cs_skill +10, energy -5)\n" +
      "10 - 12 | eat cookie (energy +14)"
    )

    ev5 = Events::GameTime.new(:tick, :game_time, [])
    ev6 = Events::GameTime.new(:tick, :game_time, [])

    produced_events = Aggregates::TimeProgress.new([ev3, ev4, ev5, ev6]).call

    _(produced_events.group_by(&:action)[:study].first.target).must_equal @cs_book
    _(produced_events.group_by(&:action)[:eat].first.target).must_equal @cookie

    result = Aggregates::Stats.new({}, produced_events).call

    _(result.to_h).must_equal(
      {
        stats: { cs_skill: 10, energy: 9 },
        inventory: ""
      }
    )

    _(result.side_effects.first.action).must_equal :consume
    _(result.side_effects.first.target).must_equal @cookie

    _(Aggregates::Inventory.new([ev1, ev2] + result.side_effects).call.to_s).must_equal(
      "cs_book * 1 | permanent\ncookie * 0 | consumable"
    )

    @software_engineer = Static::Job.new(
      :software_engineer,
      30,
      { cs_skill: 10 },
      { cs_skill: 3 },
      { energy: -10 },
    )
    job_apply = Events::Event.new(:apply, @software_engineer, [])

    fail = Aggregates::JobApplication.new([job_apply]).call
    _(fail.bool).must_equal(false)

    success = Aggregates::JobApplication.new(produced_events + [job_apply]).call
    _(success.bool).must_equal(true)

    work = Events::Event.new(:schedule, @software_engineer, [], { as: :work,   from: '', till: ''})

    # ev5 and ev6 are before the work event time
    produced_events = Aggregates::TimeProgress.new([work, ev5, ev6]).call
    _(produced_events.empty?).must_equal true

    ev7 = Events::GameTime.new(:tick, :game_time, [])
    ev8 = Events::GameTime.new(:tick, :game_time, [])
    ev9 = Events::GameTime.new(:tick, :game_time, [])

    produced_events = Aggregates::TimeProgress.new([work, ev7, ev8, ev9]).call
    _(produced_events.length).must_equal 2
    _(produced_events.first.action).must_equal :work
    _(produced_events.first.target).must_equal @software_engineer

    result = Aggregates::Stats.new({}, produced_events).call

    _(result.to_h).must_equal(
      {
        stats: { money: 60, cs_skill: 6, energy: -20 },
        inventory: ""
      }
    )
  end

  it "terminates if terminating space attr goes zero" do
    base = {  energy: 0 }
    result = Aggregates::Stats.new(base, @events).call
    _(result.violations).must_equal(
      [:game_ends, :game_ends]
    )
  end
end