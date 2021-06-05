require "minitest/autorun"
require "pp"

require "zeitwerk"
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/../lib")
loader.push_dir("#{__dir__}/../web")
loader.setup

module Game
  EVENTS = []
  SPEED_CHANGE_EVENTS = []
  STATS = { }
  START_TIME = Time.now
  INITIAL_SPEED = 20_000 # how fast you want a day to pass (multiplier)
  LAST_STATS_PROCESSED_AT = { val: START_TIME }
  DAY_IN_SECONDS = 86400
end

require_relative 'test_helper'