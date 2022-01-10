import { PlaceOfPowerType, PlaceOfPowerSet } from '../types/types'

const SACRED_GROVE: PlaceOfPowerType = {
  id: 'place-of-power-1A',
  title: 'Sacred Grove',
  type: 'place-of-power',
  cost: {
    green: 8,
    blue: 4
  },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: { resources: { blue: 1 } }
      },
      reward: {
        gain: {
          resources: {
            green: 5
          },
          target: 'player'
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
            green: 1
          },
          target: 'self'
        }
      }
    }
  ],
  points: 2,
  pointsPer: { type: 'green', points: 1, target: 'self' }
}

const ALCHEMISTS_TOWER: PlaceOfPowerType = {
  id: 'place-of-power-1B',
  title: "Alchemist's Tower",
  type: 'place-of-power',
  cost: {
    gold: 3
  },
  collect: {
    wild: 3,
    wildRestrictions: 'gold'
  },
  actions: [
    {
      cost: { discard: { resources: { black: 1, red: 1, blue: 1, green: 1 } } },
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
  reactions: [
    {
      type: 'any-life-loss',
      cost: { tap: 'self' },
      reward: { ignore: true }
    }
  ],
  pointsPer: { type: 'gold', points: 1, target: 'self' }
}

const one: PlaceOfPowerSet = {
  id: 'place-of-power-1',
  sideA: SACRED_GROVE,
  sideB: ALCHEMISTS_TOWER
}

const CURSED_FORGE: PlaceOfPowerType = {
  id: 'place-of-power-2A',
  title: 'Cursed Forge',
  type: 'place-of-power',
  cost: {
    red: 6,
    black: 3
  },
  collectSpecial: 'cursed-forge',
  actions: [
    {
      cost: {
        discard: { resources: { red: 2, gold: 1 } }
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
  points: 1,
  pointsPer: { type: 'gold', points: 1, target: 'self' }
}
const DWARVEN_MINES: PlaceOfPowerType = {
  id: 'place-of-power-2B',
  title: 'Dwarven Mines',
  type: 'place-of-power',
  cost: {
    red: 4,
    green: 2,
    gold: 1
  },
  collect: { gold: 1 },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: { resources: { red: 5 } }
      },
      reward: {
        gain: {
          resources: {
            gold: 3
          },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: 'self',
        discard: { resources: { black: 3, red: 3 } }
      },
      reward: {
        gain: {
          resources: {
            gold: 2
          },
          target: 'self'
        }
      }
    }
  ],
  pointsPer: { type: 'gold', points: 1, target: 'self' }
}

const two: PlaceOfPowerSet = {
  id: 'place-of-power-2',
  sideA: CURSED_FORGE,
  sideB: DWARVEN_MINES
}

const CORAL_CASTLE: PlaceOfPowerType = {
  id: 'place-of-power-3A',
  title: 'Coral Castle',
  type: 'place-of-power',
  cost: {
    red: 5,
    green: 5,
    blue: 5
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: { checkVictoryNow: true }
    }
  ],
  reactions: [
    {
      type: 'any-life-loss',
      cost: { tap: 'self' },
      reward: { ignore: true }
    }
  ],
  points: 3
}
const SUNKEN_REEF: PlaceOfPowerType = {
  id: 'place-of-power-3B',
  title: 'Sunken Reef',
  type: 'place-of-power',
  cost: {
    blue: 5,
    red: 2,
    green: 2
  },
  collect: { gold: 1 },
  actions: [
    {
      cost: {
        discard: { resources: { blue: 2, green: 1 } }
      },
      reward: {
        gain: {
          resources: {
            blue: 1
          },
          target: 'self'
        }
      }
    }
  ],
  pointsPer: { type: 'blue', points: 1, target: 'self' }
}

const three: PlaceOfPowerSet = {
  id: 'place-of-power-3',
  sideA: CORAL_CASTLE,
  sideB: SUNKEN_REEF
}

const CATACOMBS_OF_THE_DEAD: PlaceOfPowerType = {
  id: 'place-of-power-4A',
  title: 'Catacombs of the Dead',
  type: 'place-of-power',
  cost: {
    black: 9
  },
  actions: [
    {
      cost: { discard: { resources: { black: 5 } } },
      reward: {
        gain: {
          target: 'self',
          resources: { black: 1 }
        }
      }
    },
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          target: 'self',
          resources: { black: 1 }
        }
      }
    }
  ],
  pointsPer: { type: 'black', points: 1, target: 'self' }
}
const SACRIFICIAL_PIT: PlaceOfPowerType = {
  id: 'place-of-power-4B',
  title: 'Sacrificial Pit',
  type: 'place-of-power',
  cost: {
    red: 8,
    black: 4
  },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: { resources: { green: 3 } }
      },
      reward: {
        gain: {
          resources: {
            black: 1
          },
          target: 'self'
        }
      }
    },
    {
      cost: {
        tap: 'self',
        discard: { resources: { black: 1 } },
        destroy: 'dragonOrCreature'
      },
      reward: {
        destroyedArtifactInGold: true
      }
    }
  ],
  points: 2,
  pointsPer: { type: 'black', points: 1, target: 'self' }
}

const four: PlaceOfPowerSet = {
  id: 'place-of-power-4',
  sideA: CATACOMBS_OF_THE_DEAD,
  sideB: SACRIFICIAL_PIT
}

const DRAGON_LAIR: PlaceOfPowerType = {
  id: 'place-of-power-5A',
  title: "Dragon's Lair",
  type: 'place-of-power',
  cost: {
    red: 3,
    green: 3,
    blue: 3,
    black: 3
  },
  discount: {
    type: 'dragon',
    resources: {
      wild: 3
    }
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          target: 'player',
          resources: { gold: 2 }
        }
      }
    },
    {
      cost: { tap: { and: ['self', 'dragon'] } },
      reward: {
        gain: {
          target: 'self',
          resources: { gold: 2 }
        }
      }
    }
  ],
  pointsPer: { type: 'gold', points: 1, target: 'self' }
}

const SORCERERS_BESTIARY: PlaceOfPowerType = {
  id: 'place-of-power-5B',
  title: "Sorcerer's Bestiary",
  type: 'place-of-power',
  cost: {
    green: 4,
    red: 2,
    blue: 2,
    black: 2
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: { checkVictoryNow: true }
    },
    {
      cost: {
        tap: 'self',
        discard: { resources: { wild: 4 } }
      },
      reward: {
        placeFreeCreatureFromAnyPlayerDiscard: 'dragon'
      }
    }
  ],
  pointsPer: {
    and: [
      { type: 'creature', points: 1, target: 'player' },
      { type: 'dragon', points: 2, target: 'player' }
    ]
  }
}

const five: PlaceOfPowerSet = {
  id: 'place-of-power-5',
  sideA: DRAGON_LAIR,
  sideB: SORCERERS_BESTIARY
}

/* Expansion 1 */

const DRAGON_AERIE: PlaceOfPowerType = {
  id: 'place-of-power-6A',
  title: 'Dragon Aerie',
  type: 'place-of-power',
  cost: {
    red: 8,
    green: 4
  },
  collect: {
    gold: 1
  },
  actions: [
    {
      cost: { discard: { resources: { green: 4 } } },
      reward: { gain: { resources: { green: 1 }, target: 'self' } }
    },
    {
      cost: { tap: 'dragon' },
      reward: { gain: { resources: { green: 1 }, target: 'self' } }
    }
  ],
  pointsPer: { type: 'green', points: 1, target: 'self' },
  expansion: 1
}

const CRYSTAL_KEEP: PlaceOfPowerType = {
  id: 'place-of-power-6B',
  title: 'Crystal Keep',
  type: 'place-of-power',
  cost: {
    red: 4,
    green: 4,
    blue: 4,
    black: 4,
    gold: 4
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: { checkVictoryNow: true }
    }
  ],
  points: 5,
  pointsPer: { type: 'artifact', divide: 2, points: 1, target: 'player' },
  expansion: 1
}

const six: PlaceOfPowerSet = {
  id: 'place-of-power-6',
  sideA: DRAGON_AERIE,
  sideB: CRYSTAL_KEEP,
  expansion: 1
}

const TEMPLE_OF_THE_ABYSS: PlaceOfPowerType = {
  id: 'place-of-power-7A',
  title: 'Temple of the Abyss',
  type: 'place-of-power',
  cost: {
    blue: 6,
    black: 3
  },
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { green: 2 } } },
      reward: { unTap: 'allDemons' }
    },
    {
      cost: { discard: { resources: { blue: 2, black: 2 } } },
      reward: { gain: { resources: { blue: 1 }, target: 'self' } }
    },
    {
      cost: { tap: 'demon' },
      reward: { gain: { resources: { blue: 1 }, target: 'self' } }
    }
  ],
  pointsPer: { type: 'blue', points: 1, target: 'self' },
  expansion: 1
}

const GATE_OF_HELL: PlaceOfPowerType = {
  id: 'place-of-power-7B',
  title: 'Gate of Hell',
  type: 'place-of-power',
  cost: {
    red: 6,
    black: 3
  },
  actions: [
    {
      cost: { tap: { and: ['self', 'demon'] } },
      reward: { gain: { resources: { black: 1 }, target: 'self' } }
    },
    {
      cost: { destroy: 'creature' },
      reward: { gain: { resources: { black: 1 }, target: 'self' } }
    },
    {
      cost: { discard: { resources: { red: 4 } } },
      reward: { gain: { resources: { black: 1 }, target: 'self' } }
    }
  ],
  pointsPer: {
    and: [
      { type: 'demon', points: 1, target: 'player' },
      { type: 'black', points: 1, target: 'self' }
    ]
  },
  expansion: 1
}

const seven: PlaceOfPowerSet = {
  id: 'place-of-power-7',
  sideA: TEMPLE_OF_THE_ABYSS,
  sideB: GATE_OF_HELL,
  expansion: 1
}

export const PLACES_OF_POWER: PlaceOfPowerSet[] = [
  one,
  two,
  three,
  four,
  five,
  /* Expansion 1 */
  six,
  seven
]
