require_relative 'test_setup'

describe Ticker do
  it 'ticks every one hour' do
    _(Ticker.new.reads).must_equal "noop"
  end

  it 'speeds up the tick' do
    now = Time.now
    t = Ticker.new
    t.change_speed(36000) # 0.1 sec becomes 1 hour

    yielded_tick, game_speed = t.blocking_reads
    _(game_speed).must_equal 36000
    _(yielded_tick).must_be_close_to now, 1
  end
end