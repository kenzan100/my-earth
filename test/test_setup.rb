require "minitest/autorun"
require "pp"

require "zeitwerk"
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/../lib")
loader.push_dir("#{__dir__}/../web")
loader.setup

require_relative 'test_helper'