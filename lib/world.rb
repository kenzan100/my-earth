module World
  MONEY_SPACE = Constructs::Space.new(:money)
  ENERGY_SPACE = Constructs::Space.new(:energy)
  COOKIE_SPACE = Constructs::Space.new(:cookie)
  CS_SKILL_SPACE = Constructs::Space.new(:cs_skill)
  CS_BOOK_SPACE = Constructs::Space.new(:cs_book)
  COMMUNICATION_SPACE = Constructs::Space.new(:communication_skill)
  NO_OP_SPACE = Constructs::Space.new(:no_op)

  COOKIE_SPACE.add_violation(
    ->(val) { val < 0 },
    :cookie_cannot_be_below_zero,
    "I can't consume what I don't have."
  )
  ENERGY_SPACE.add_violation(
    ->(val) { val < 0 },
    :i_am_too_tired,
    "I need more energy."
  )
  MONEY_SPACE.add_violation(
    ->(val) { val < 0 },
    :money_cannot_go_below_zero,
    "I don't have enough money."
  )
  MONEY_SPACE.add_end_state(
    ->(val) { val > 1000 },
    :money_achieved
  )

  JOBS = {}
  ITEMS = {}

  PURCHASE_VEC = Constructs::Vector.new(MONEY_SPACE, -10)
  PURCHASE_COOKIE_VEC = Constructs::Vector.new(COOKIE_SPACE, 1)
  EAT_VEC = Constructs::Vector.new(ENERGY_SPACE, 10)
  CONSUME_VEC = Constructs::Vector.new(COOKIE_SPACE, -1)

  COOKIE = Static::Allocatable.new(:cookie, :item)
  COOKIE.add_possible_action(:purchase, [PURCHASE_VEC, PURCHASE_COOKIE_VEC], [])
  COOKIE.add_possible_action(:eat, [EAT_VEC, CONSUME_VEC], [])

  CS_BOOK = Static::Allocatable.new(:cs_book, :item)
  CS_BOOK.add_possible_action(
    :purchase,
    [
      Constructs::Vector.new(MONEY_SPACE, -200),
      Constructs::Vector.new(CS_BOOK_SPACE, 1)
    ],
    []
  )
  CS_BOOK.add_possible_action(
    :study,
    [
      Constructs::Vector.new(CS_SKILL_SPACE, 1),
      Constructs::Vector.new(ENERGY_SPACE, -30)
    ],
    []
  )

  a = Static::Allocatable.new(:make_web_app_by_yourself)

  # Lay out the job (or means to earn money), and ask what constraints (needed) to happen in order to get that.
  # Labels to bridge the gap between canonical names, and the variations of same type of jobs.
  # 1 base unit of experience, and various multipliers to accelerate the ROI per time to acquire 1 base unit per day
  # (not every activity will create the equal weight)
  # (to unlock certain multiplier, you need prior levels)

  WEB_DEV_PORTFOLIO_SPACE = Constructs::Space.new(:web_dev_portfolio)
  ENGLISH_SKILL_SPACE = Constructs::Space.new(:english_skill)
  Label = Struct.new(:id)
  DEV_LEAD_SPACE = Constructs::Space.new(:dev_lead_experience)
  Static::Allocatable.new(
    :senior_level_software_developer_abroad,
    :job,
    [Label.new(:abroad), Label.new(:well_known)]
  )

  SOFTWARE_ENGINEER = Static::Allocatable.new(:software_engineer, :job)
  SOFTWARE_ENGINEER.add_possible_action(
    :work,
    [
      Constructs::Vector.new(ENERGY_SPACE, -20),
      Constructs::Vector.new(CS_SKILL_SPACE, 3),
      Constructs::Vector.new(MONEY_SPACE, 30)
    ],
    [
      Constructs::Violation.new(
        CS_SKILL_SPACE,
        ->(v) { v < 10 },
        :my_cs_skill_is_too_low,
        "cs_skill needs to be above 10"
      )
    ]
  )
  MCDONALD_PART_TIME = Static::Allocatable.new(:mcdonald_part_time, :job)
  MCDONALD_PART_TIME.add_possible_action(
    :work,
    [
      Constructs::Vector.new(ENERGY_SPACE, -10),
      Constructs::Vector.new(COMMUNICATION_SPACE, 1),
      Constructs::Vector.new(MONEY_SPACE, 12)
    ],
    [
      Constructs::Violation.new(
        NO_OP_SPACE,
        ->(v) { rand > 1 },
        :do_not_feel_like_it,
        "30% chance of not working successfully"
      )
    ]
  )
end