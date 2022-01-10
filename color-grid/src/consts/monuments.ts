import { MonumentType } from '../types/types'

const COLOSSUS: MonumentType = {
  id: 'monument-1',
  title: 'Colossus',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            wild: 1
          }
        }
      },
      reward: {
        gain: {
          resources: {
            gold: 1
          },
          target: 'self'
        }
      }
    }
  ]
}

const GOLDEN_STATUE: MonumentType = {
  id: 'monument-2',
  title: 'Golden Statue',
  type: 'monument',
  cost: { gold: 4 },
  reactions: [
    {
      type: 'victory-check',
      cost: {
        tap: 'self',
        discard: {
          resources: {
            gold: 3
          }
        }
      },
      reward: {
        thisCheckVictoryBonus: 3
      }
    }
  ],
  points: 1
}

const GREAT_PYRAMID: MonumentType = {
  id: 'monument-3',
  title: 'Great Pyramid',
  type: 'monument',
  cost: { gold: 4 },
  points: 3
}

const HANGING_GARDENS: MonumentType = {
  id: 'monument-4',
  title: 'Hanging Gardens',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  collect: {
    wild: 3,
    wildRestrictions: 'gold'
  }
}

const LIBRARY: MonumentType = {
  id: 'monument-5',
  title: 'Library',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  actions: [
    {
      cost: {
        tap: 'self'
      },
      reward: {
        drawCards: 1
      }
    }
  ]
}

const MAUSOLEUM: MonumentType = {
  id: 'monument-6',
  title: 'Mausoleum',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  actions: [
    {
      cost: {
        discard: {
          resources: {
            wild: 1
          }
        }
      },
      reward: {
        gain: {
          resources: {
            black: 1
          },
          target: 'self'
        }
      }
    }
  ]
}

const OBELISK: MonumentType = {
  id: 'monument-7',
  title: 'Obelisk',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  reactions: [
    {
      type: 'self-bought',
      reward: {
        gain: {
          resources: { wild: 6, wildRestrictions: 'gold' },
          target: 'player'
        }
      }
    }
  ]
}

const ORACLE: MonumentType = {
  id: 'monument-8',
  title: 'Oracle',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  actions: [
    {
      cost: {
        tap: 'self'
      },
      reward: {
        reorderTopCards: 3
      }
    }
  ]
}

const SOLOMONS_MUSE: MonumentType = {
  id: 'monument-9',
  title: "Solomon's Muse",
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  actions: [
    {
      cost: {
        tap: 'self'
      },
      reward: {
        gain: {
          resources: {
            gold: 1
          },
          target: 'player'
        }
      }
    }
  ]
}

const TEMPLE: MonumentType = {
  id: 'monument-10',
  title: 'Temple',
  type: 'monument',
  cost: { gold: 4 },
  points: 2,
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        tap: 'self'
      },
      reward: { ignore: true }
    }
  ]
}

/* Expansion 1 */

const ALCHEMICAL_LAB: MonumentType = {
  id: 'monument-11',
  title: 'Alchemical Lab',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            wild: 1
          }
        }
      },
      reward: {
        gain: {
          sameResourcesAsCost: true,
          target: 'any'
        }
      }
    }
  ],
  expansion: 1
}

const DARK_CATHEDRAL: MonumentType = {
  id: 'monument-12',
  title: 'Dark Cathedral',
  type: 'monument',
  cost: { gold: 4 },
  collect: {
    black: 1
  },
  reactions: [
    {
      type: 'victory-check',
      cost: {
        tap: { and: ['self', 'demon'] }
      },
      reward: {
        thisCheckVictoryBonus: 1
      }
    }
  ],
  points: 2,
  expansion: 1
}

const DEMON_WORKSHOP: MonumentType = {
  id: 'monument-13',
  title: 'Demon Workshop',
  type: 'monument',
  cost: { gold: 4 },
  points: 1,
  collect: { or: [{ red: 1 }, { black: 1 }] },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            gold: 1
          }
        }
      },
      reward: {
        unTap: 'any'
      }
    }
  ],
  expansion: 1
}

const WARRIORS_HALL: MonumentType = {
  id: 'monument-14',
  title: "Warrior's Hall",
  type: 'monument',
  cost: { gold: 4 },
  collect: {
    red: 1
  },
  actions: [
    {
      cost: {
        tap: 'self'
      },
      reward: {
        gain: {
          resources: { red: 1 },
          target: 'player'
        },
        rivalsGainResource: 'red'
      }
    }
  ],
  points: 2,
  expansion: 1
}

export const MONUMENTS = [
  COLOSSUS,
  GOLDEN_STATUE,
  GREAT_PYRAMID,
  HANGING_GARDENS,
  LIBRARY,
  MAUSOLEUM,
  OBELISK,
  ORACLE,
  SOLOMONS_MUSE,
  TEMPLE,
  /* Expansion 1 */
  ALCHEMICAL_LAB,
  DARK_CATHEDRAL,
  DEMON_WORKSHOP,
  WARRIORS_HALL
]
