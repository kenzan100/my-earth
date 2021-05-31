class Ticker
  def initialize
    @filler = FillerMaker.make
    @ticking = make_ticking
  end

  def change_speed(speed)
    raise unless speed.is_a?(Numeric)
    @ticking << speed
  end

  def reads
    _sender, yielded = Ractor.select(Ractor.current, @filler.tap { |f| f << 'noop' })
    yielded
  end

  def reads_till_fully_read
    events = []
    event = reads
    while event != 'noop'
      events << event
      event = reads
    end
    events
  end

  def blocking_reads
    Ractor.current.take
  end

  private

  module FillerMaker
    def make
      Ractor.new do
        loop do
          Ractor.yield Ractor.receive
        end
      end
    end
    module_function :make
  end

  def make_ticking
    Ractor.new Ractor.current do |main|
      filler = FillerMaker.make
      current_speed = 1

      elapsed = Time.now
      loop do
        _sender, speed = Ractor.select(Ractor.current, filler.tap { |f| f << 'noop-speed' })
        if speed.is_a?(Numeric)
          current_speed = speed
        end
        now = Time.now
        if ((now - elapsed) * current_speed) >= 3600
          main << [now, current_speed]
          elapsed = Time.now
        end
      end
    end
  end
end