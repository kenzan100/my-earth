require_relative 'test_setup'
Dir.glob('./test/**/*_test.rb').each { |file| require file}