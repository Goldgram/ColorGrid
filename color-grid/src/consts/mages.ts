import { MageType } from '../types/types'

/* Starting Hand */

const DUELIST: MageType = {
  id: 'mage-1',
  title: 'Duelist',
  type: 'mage',
  collect: { red: 1 },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            black: 1
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
  ],
  startingHand: 1
}

const SEER: MageType = {
  id: 'mage-2',
  title: 'Seer',
  type: 'mage',
  collect: { blue: 1 },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        reorderTopCards: 3
      }
    }
  ],
  startingHand: 2
}

const ALCHEMIST: MageType = {
  id: 'mage-3',
  title: 'Alchemist',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            wild: 4
          }
        }
      },
      reward: {
        gain: {
          resources: {
            gold: 2
          },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: 'self'
      },
      reward: {
        gain: {
          resources: {
            wild: 1,
            wildRestrictions: 'gold'
          },
          target: 'player'
        }
      }
    }
  ],
  startingHand: 3
}

const TRANSMUTER: MageType = {
  id: 'mage-4',
  title: 'Transmuter',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            wild: 2
          }
        }
      },
      reward: {
        gain: {
          resources: {
            wild: 3,
            wildRestrictions: 'gold'
          },
          target: 'player'
        }
      }
    }
  ],
  startingHand: 4
}

/* Base */

const ARTIFICER: MageType = {
  id: 'mage-5',
  title: 'Artificer',
  type: 'mage',
  discount: {
    type: 'artifact',
    resources: {
      wild: 1,
      wildRestrictions: 'gold'
    }
  }
}

const DRUID: MageType = {
  id: 'mage-6',
  title: 'Druid',
  type: 'mage',
  collect: { green: 1 },
  actions: [
    {
      cost: { tap: 'self' },
      reward: { unTap: 'creature' }
    }
  ]
}

const HEALER: MageType = {
  id: 'mage-7',
  title: 'Healer',
  type: 'mage',
  collect: { or: [{ blue: 1 }, { green: 1 }] },
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

const NECROMANCER: MageType = {
  id: 'mage-8',
  title: 'Necromancer',
  type: 'mage',
  collect: { black: 1 },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            green: 2
          }
        }
      },
      reward: {
        gain: {
          resources: {
            black: 3
          },
          target: 'self'
        }
      }
    }
  ]
}

const SCHOLAR: MageType = {
  id: 'mage-9',
  title: 'Scholar',
  type: 'mage',
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
      reward: { drawCards: 1 }
    }
  ]
}

const WITCH: MageType = {
  id: 'mage-10',
  title: 'Witch',
  type: 'mage',
  collect: { or: [{ green: 1 }, { black: 1 }] },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            wild: 2
          }
        }
      },
      reward: { unTap: 'any' }
    }
  ]
}

/* Expansion 1 */

const BARD: MageType = {
  id: 'mage-11',
  title: 'Bard',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: 'self',
        discard: { anyCreature: true }
      },
      reward: {
        gain: {
          resources: {
            gold: 2
          },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: 'self'
      },
      reward: {
        gain: {
          resources: {
            wild: 1,
            wildRestrictions: 'gold'
          },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const BEAST_MASTER: MageType = {
  id: 'mage-12',
  title: 'Beastmaster',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            green: 1
          }
        }
      },
      reward: {
        gain: {
          resources: {
            green: 3
          },
          target: 'self'
        }
      }
    },
    {
      cost: {
        tap: { and: ['self', 'creature'] }
      },
      reward: {
        gain: {
          resources: {
            wild: 2,
            wildRestrictions: 'gold'
          },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const DEMONOLOGIST: MageType = {
  id: 'mage-13',
  title: 'Demonologist',
  type: 'mage',
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            green: 1
          }
        }
      },
      reward: { retrieveDiscardedCard: 1 }
    },
    {
      cost: {
        tap: 'self'
      },
      reward: {
        unTap: 'demon'
      }
    }
  ],
  expansion: 1
}

const DIVINER: MageType = {
  id: 'mage-14',
  title: 'Diviner',
  type: 'mage',
  collect: { red: 1 },
  actions: [
    {
      cost: {
        tap: 'self'
      },
      reward: {
        drawAndDiscard: [3, 3]
      }
    }
  ],
  expansion: 1
}

export const MAGES = [
  /* Starting Hand */
  DUELIST,
  SEER,
  ALCHEMIST,
  TRANSMUTER,
  /* Base */
  ARTIFICER,
  DRUID,
  HEALER,
  NECROMANCER,
  SCHOLAR,
  WITCH,
  /* Expansion 1 */
  BARD,
  BEAST_MASTER,
  DEMONOLOGIST,
  DIVINER
]
