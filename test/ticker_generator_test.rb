require_relative 'test_setup'

describe Aggregates::TickGenerator do
  it 'generates ticks as many as time elapsed since beginning of the game' do
    game_start = Time.now - 10000
    instance = Aggregates::TickGenerator.new(start_time: game_start)
    tick_events = instance.call(Time.now)
    tick_events.map(&:game_time).each.with_index do |tick_time, i|
      elapsed = game_start + (i * Game::DAY_IN_SECONDS)
      _(tick_time).must_be_close_to elapsed
    end
  end

  it 'takes into account of game speed change events' do
    game_start = Time.now - 10000
    game_speed_change_events = [
      Events::GameTime.new(
        :game_speed_change,
        :system,
        [],
        { when: game_start + 1, speed_val: 2 }
      )
    ]
    instance = Aggregates::TickGenerator.new(
      start_time: game_start,
      events: game_speed_change_events
    )

    tick_events = instance.call(Time.now)
    tick_events.map(&:registered_at).each.with_index do |tick_time, i|
      elapsed = game_start + (i * (3600/2))
      _(tick_time).must_be_close_to elapsed, 1
    end
  end
end
