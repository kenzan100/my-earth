class Game
  EVENTS = []
  SPEED_CHANGE_EVENTS = []
  STATS = { }
  START_TIME = Time.now
  INITIAL_SPEED = 20_000 # how fast you want a day to pass (multiplier)
  LAST_STATS_PROCESSED_AT = { val: START_TIME }
  DAY_IN_SECONDS = 86400
end
