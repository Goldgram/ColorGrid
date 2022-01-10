import { ArtifactType } from '../types/types'

/* Starting Hand */

const DRAGON_TEETH: ArtifactType = {
  id: 'artifact-1',
  title: 'Dragon Teeth',
  type: 'artifact',
  cost: {
    red: 1,
    black: 1
  },
  actions: [
    {
      cost: { discard: { resources: { red: 2 } } },
      reward: { gain: { resources: { red: 3 }, target: 'self' } }
    },
    {
      cost: { tap: 'self', discard: { resources: { red: 3 } } },
      reward: { discount: { type: 'dragon', free: true } }
    }
  ],
  startingHand: 1
}

const ELEMENTAL_SPRING: ArtifactType = {
  id: 'artifact-2',
  title: 'Elemental Spring',
  type: 'artifact',
  cost: {
    red: 2,
    green: 1,
    blue: 1
  },
  collect: {
    blue: 1,
    green: 1,
    red: 1
  },
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        discard: {
          resources: {
            blue: 1
          }
        }
      },
      reward: { ignore: true }
    }
  ],
  startingHand: 1
}

const HAND_OF_GLORY: ArtifactType = {
  id: 'artifact-3',
  title: 'Hand of Glory',
  type: 'artifact',
  cost: {
    green: 1,
    black: 1
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          resources: { black: 2 },
          target: 'player'
        },
        rivalsGainResource: 'black'
      }
    }
  ],
  startingHand: 1
}

const CHALICE_OF_LIFE: ArtifactType = {
  id: 'artifact-4',
  title: 'Chalice of Life',
  type: 'artifact',
  cost: {
    gold: 1,
    green: 1,
    blue: 1
  },
  collect: {
    blue: 1,
    green: 1
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            blue: 2
          }
        }
      },
      reward: {
        gain: {
          resources: {
            blue: 2,
            green: 1
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
  startingHand: 2
}

const FLAMING_PIT: ArtifactType = {
  id: 'artifact-5',
  title: 'Flaming Pit',
  type: 'artifact',
  cost: {
    red: 2
  },
  collect: {
    red: 1
  },
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
            red: 1,
            black: 1
          },
          target: 'player'
        }
      }
    }
  ],
  startingHand: 2
}

const VAULT: ArtifactType = {
  id: 'artifact-6',
  title: 'Vault',
  type: 'artifact',
  cost: {
    gold: 1,
    wild: 1
  },
  collectSpecial: 'vault',
  actions: [
    {
      cost: { tap: 'self' },
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
  startingHand: 2
}

const CELESTIAL_HORSE: ArtifactType = {
  id: 'artifact-7',
  title: 'Celestial Horse',
  type: 'artifact',
  creature: 'creature',
  cost: {
    blue: 2,
    red: 1
  },
  collect: {
    wild: 2,
    wildRestrictions: { and: ['gold', 'black'] }
  },
  startingHand: 3
}

const MAGICAL_SHARD: ArtifactType = {
  id: 'artifact-8',
  title: 'Magical Shard',
  type: 'artifact',
  cost: {},
  actions: [
    {
      cost: { tap: 'self' },
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

const TREE_OF_LIFE: ArtifactType = {
  id: 'artifact-9',
  title: 'Tree of Life',
  type: 'artifact',
  cost: {
    wild: 2,
    green: 1
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          resources: { green: 3 },
          target: 'player'
        },
        rivalsGainResource: 'green'
      }
    }
  ],
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        discard: {
          resources: {
            green: 1
          }
        }
      },
      reward: {
        ignore: true
      }
    }
  ],
  startingHand: 3
}

const DANCING_SWORD: ArtifactType = {
  id: 'artifact-10',
  title: 'Dancing Sword',
  type: 'artifact',
  cost: {
    gold: 1,
    red: 1
  },
  collect: {
    black: 1,
    red: 1
  },
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        discard: {
          resources: {
            red: 1
          }
        }
      },
      reward: {
        ignore: true,
        gain: {
          resources: {
            black: 1
          },
          target: 'self'
        }
      }
    }
  ],
  startingHand: 4
}

const FOUNTAIN_OF_YOUTH: ArtifactType = {
  id: 'artifact-11',
  title: 'Fountain of Youth',
  type: 'artifact',
  cost: {
    blue: 1,
    black: 1
  },
  collect: {
    green: 1
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            black: 2
          }
        }
      },
      reward: {
        gain: {
          resources: {
            blue: 2,
            green: 1
          },
          target: 'self'
        }
      }
    }
  ],
  startingHand: 4
}

const HAWK: ArtifactType = {
  id: 'artifact-12',
  title: 'Hawk',
  type: 'artifact',
  creature: 'creature',
  cost: {
    green: 1,
    blue: 1
  },
  collect: {
    blue: 1
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        reorderTopCards: 3
      }
    },
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            blue: 2
          }
        }
      },
      reward: {
        drawCards: 1
      }
    }
  ],
  startingHand: 4
}

/* Base */
const ATHANOR: ArtifactType = {
  id: 'artifact-13',
  title: 'Athanor',
  type: 'artifact',
  cost: {
    gold: 1,
    red: 1
  },
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { red: 1 } } },
      reward: {
        gain: {
          resources: { red: 2 },
          target: 'self'
        }
      }
    },
    {
      cost: {
        tap: 'self',
        discard: {
          resources: { red: 6 },
          resourcesOnSelf: true,
          wildDiscard: true
        }
      },
      reward: {
        gain: {
          target: 'player',
          resourceNumberAsWildDiscard: {
            resource: 'gold'
          }
        }
      }
    }
  ]
}

const BONE_DRAGON: ArtifactType = {
  id: 'artifact-14',
  title: 'Bone Dragon',
  type: 'artifact',
  creature: 'dragon',
  cost: {
    black: 4,
    green: 1
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { black: 1 }
        }
      }
    }
  ],
  points: 1
}

const CHALICE_OF_FIRE: ArtifactType = {
  id: 'artifact-15',
  title: 'Chalice of Fire',
  type: 'artifact',
  cost: {
    gold: 1,
    red: 1
  },
  collect: {
    red: 2
  },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            red: 1
          }
        }
      },
      reward: {
        unTap: 'any'
      }
    }
  ]
}

const CORRUPT_ALTAR: ArtifactType = {
  id: 'artifact-16',
  title: 'Corrupt Altar',
  type: 'artifact',
  cost: {
    wild: 3,
    black: 2
  },
  collect: {
    green: 1,
    black: 1
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            green: 2
          }
        }
      },
      reward: {
        gain: { resources: { red: 3 }, target: 'self' }
      }
    },
    {
      cost: { tap: 'self', destroy: 'anyArtifact' },
      reward: {
        destroyedArtifactBonus: {
          wild: 2,
          wildRestrictions: 'gold'
        }
      }
    }
  ]
}

const CRYPT: ArtifactType = {
  id: 'artifact-17',
  title: 'Crypt',
  type: 'artifact',
  cost: {
    wild: 3,
    black: 2
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: { gain: { resources: { black: 2 }, target: 'player' } }
    },
    {
      cost: { tap: 'self', discard: { resources: { black: 1 } } },
      reward: {
        discount: {
          type: 'discarded-card',
          resources: { wild: 2, wildRestrictions: 'gold' }
        }
      }
    }
  ]
}

const CURSED_SKULL: ArtifactType = {
  id: 'artifact-18',
  title: 'Cursed Skull',
  type: 'artifact',
  cost: {
    black: 2
  },
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
            wild: 3,
            wildRestrictions: { and: ['gold', 'green'] }
          },
          target: 'self'
        }
      }
    }
  ]
}

const DRAGON_BRIDLE: ArtifactType = {
  id: 'artifact-19',
  title: 'Dragon Bridle',
  type: 'artifact',
  cost: {
    red: 1,
    green: 1,
    blue: 1,
    black: 1
  },
  discount: {
    type: 'dragon',
    resources: {
      wild: 3
    }
  },
  reactions: [
    {
      type: 'dragon',
      cost: { tap: 'self' },
      reward: { ignore: true }
    }
  ],
  points: 1
}

const DRAGON_EGG: ArtifactType = {
  id: 'artifact-20',
  title: 'Dragon Egg',
  type: 'artifact',
  cost: {
    gold: 1
  },
  actions: [
    {
      cost: { destroy: 'self' },
      reward: { discount: { type: 'dragon', resources: { wild: 4 } } }
    }
  ],
  points: 1
}

const DWARVEN_PICKAXE: ArtifactType = {
  id: 'artifact-21',
  title: 'Dwarven Pickaxe',
  type: 'artifact',
  cost: {
    red: 1
  },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            red: 1
          }
        }
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

const EARTH_DRAGON: ArtifactType = {
  id: 'artifact-22',
  title: 'Earth Dragon',
  type: 'artifact',
  creature: 'dragon',
  cost: {
    red: 4,
    green: 3
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { gold: 1 }
        }
      }
    }
  ],
  points: 1
}

const ELVISH_BOW: ArtifactType = {
  id: 'artifact-23',
  title: 'Elvish Bow',
  type: 'artifact',
  cost: {
    red: 2,
    green: 1
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        attack: {
          value: 1
        }
      }
    },
    {
      cost: { tap: 'self' },
      reward: {
        drawCards: 1
      }
    }
  ]
}

const FIRE_DRAGON: ArtifactType = {
  id: 'artifact-24',
  title: 'Fire Dragon',
  type: 'artifact',
  creature: 'dragon',
  cost: {
    red: 6
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { blue: 1 }
        }
      }
    }
  ],
  points: 1
}

const FIERY_WHIP: ArtifactType = {
  id: 'artifact-25',
  title: 'Fiery Whip',
  type: 'artifact',
  cost: {
    red: 2,
    black: 2
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: { resources: { red: 3 }, target: 'player' },
        rivalsGainResource: 'red'
      }
    },
    {
      cost: {
        tap: 'self',
        destroy: 'anotherArtifact'
      },
      reward: {
        destroyedArtifactBonus: {
          wild: 2,
          wildRestrictions: 'gold'
        }
      }
    }
  ]
}

const GUARD_DOG: ArtifactType = {
  id: 'artifact-26',
  title: 'Guard Dog',
  type: 'artifact',
  creature: 'creature',
  cost: {
    red: 1
  },
  actions: [
    {
      cost: { discard: { resources: { red: 1 } } },
      reward: {
        unTap: 'self'
      }
    }
  ],
  reactions: [
    {
      type: 'any-life-loss',
      cost: { tap: 'self' },
      reward: { ignore: true }
    }
  ]
}

const HORN_OF_PLENTY: ArtifactType = {
  id: 'artifact-27',
  title: 'Horn of Plenty',
  type: 'artifact',
  cost: {
    gold: 2
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          resources: {
            wild: 3,
            wildRestrictions: 'gold'
          },
          target: 'player'
        }
      }
    },
    {
      cost: { tap: 'self' },
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

const HYPNOTIC_BASIN: ArtifactType = {
  id: 'artifact-28',
  title: 'Hypnotic Basin',
  type: 'artifact',
  cost: {
    blue: 2,
    red: 1,
    black: 1
  },
  collect: {
    blue: 2
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          equalToRival: ['blue', 'red'],
          target: 'player'
        }
      }
    }
  ]
}

const JEWELED_STATUETTE: ArtifactType = {
  id: 'artifact-29',
  title: 'Jeweled Statuette',
  type: 'artifact',
  cost: {
    black: 2,
    gold: 1
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          resources: { black: 3 },
          target: 'player'
        },
        rivalsGainResource: 'black'
      }
    },
    {
      cost: { destroy: 'self' },
      reward: {
        gain: {
          resources: { gold: 2, red: 1 },
          target: 'player'
        }
      }
    }
  ],
  points: 1
}

const MERMAID: ArtifactType = {
  id: 'artifact-30',
  title: 'Mermaid',
  type: 'artifact',
  creature: 'creature',
  cost: {
    green: 2,
    blue: 2
  },
  collect: {
    blue: 1
  },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: { or: [{ blue: 1 }, { green: 1 }, { gold: 1 }] }
        }
      },
      reward: {
        gain: {
          sameResourcesAsCost: true,
          target: 'any'
        }
      }
    }
  ]
}

const NIGHTINGALE: ArtifactType = {
  id: 'artifact-31',
  title: 'Nightingale',
  type: 'artifact',
  creature: 'creature',
  cost: {
    green: 1,
    blue: 1
  },
  points: 1
}

const PHILOSOPHERS_STONE: ArtifactType = {
  id: 'artifact-32',
  title: "Philosopher's Stone",
  type: 'artifact',
  cost: {
    red: 2,
    green: 2,
    blue: 2,
    black: 2
  },
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 1 } } },
      reward: {
        gain: {
          resources: { wild: 2, wildRestrictions: 'gold' },
          target: 'player'
        }
      }
    },
    {
      cost: {
        tap: 'self',
        discard: { resources: { wild: 2 }, wildDiscard: true }
      },
      reward: {
        gain: {
          target: 'player',
          resourceNumberAsWildDiscard: {
            resource: 'gold'
          }
        }
      }
    }
  ],
  points: 1
}

const PRISM: ArtifactType = {
  id: 'artifact-33',
  title: 'Prism',
  type: 'artifact',
  cost: {},
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 1 } } },
      reward: {
        gain: {
          resources: { wild: 2, wildRestrictions: 'gold' },
          target: 'player'
        }
      }
    },
    {
      cost: { tap: 'self', discard: { wildDiscard: true } },
      reward: {
        gain: {
          target: 'player',
          resourceNumberAsWildDiscard: {
            resource: 'wild-with-gold-restriction'
          }
        }
      }
    }
  ]
}

const RING_OF_MIDAS: ArtifactType = {
  id: 'artifact-34',
  title: 'Ring of Midas',
  type: 'artifact',
  cost: {
    green: 1,
    gold: 1
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            green: 2
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
    },
    {
      cost: {
        tap: 'self'
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
  points: 1
}

const SACRIFICIAL_DAGGER: ArtifactType = {
  id: 'artifact-35',
  title: 'Sacrificial Dagger',
  type: 'artifact',
  cost: {
    black: 1,
    gold: 1
  },
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { green: 1 } } },
      reward: {
        gain: { resources: { black: 3 }, target: 'self' }
      }
    },
    {
      cost: {
        destroy: 'self',
        discard: { aCard: true }
      },
      reward: {
        destroyedArtifactBonus: {
          wild: 1,
          wildRestrictions: 'gold'
        }
      }
    }
  ]
}

const SEA_SERPENT: ArtifactType = {
  id: 'artifact-36',
  title: 'Sea Serpent',
  type: 'artifact',
  creature: { and: ['dragon', 'creature'] },
  cost: {
    blue: 6,
    green: 3
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: 'artifact'
        }
      }
    }
  ],
  points: 1
}

const TREANT: ArtifactType = {
  id: 'artifact-37',
  title: 'Treant',
  type: 'artifact',
  creature: 'creature',
  cost: {
    green: 3,
    red: 2
  },
  collect: {
    green: 2
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          equalToRival: ['red', 'black'],
          target: 'player'
        }
      }
    }
  ]
}

const WATER_DRAGON: ArtifactType = {
  id: 'artifact-38',
  title: 'Water Dragon',
  type: 'artifact',
  creature: 'dragon',
  cost: {
    blue: 6
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: { red: 1 }
        }
      }
    }
  ],
  points: 1
}

const WIND_DRAGON: ArtifactType = {
  id: 'artifact-39',
  title: 'Wind Dragon',
  type: 'artifact',
  creature: 'dragon',
  cost: {
    blue: 4,
    wild: 4
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        attack: {
          value: 2,
          discardToIgnore: 'card'
        }
      }
    }
  ],
  points: 1
}

const WINDUP_MAN: ArtifactType = {
  id: 'artifact-40',
  title: 'Windup Man',
  type: 'artifact',
  cost: {
    red: 1,
    green: 1,
    blue: 1,
    gold: 1
  },
  collectSpecial: 'windup-man',
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 1 } } },
      reward: {
        gain: {
          sameResourcesAsCost: true,
          target: 'self'
        }
      }
    }
  ]
}

/* Expansion 1 */

const CHAOS_IMP: ArtifactType = {
  id: 'artifact-41',
  title: 'Chaos Imp',
  type: 'artifact',
  creature: 'demon',
  cost: {
    red: 1,
    black: 1
  },
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
        unTap: 'demon'
      }
    },
    {
      cost: {
        discard: {
          resources: {
            black: 1,
            red: 1
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
  ],
  expansion: 1
}

const CURSED_DWARVEN_KING: ArtifactType = {
  id: 'artifact-42',
  title: 'Cursed Dwarven King',
  type: 'artifact',
  creature: 'demon',
  cost: {
    green: 1,
    black: 1
  },
  actions: [
    {
      cost: {
        discard: {
          resources: {
            black: 1,
            red: 1,
            green: 1
          }
        }
      },
      reward: {
        gain: {
          resources: {
            gold: 2
          },
          target: 'self'
        }
      }
    },
    {
      cost: {
        tap: { and: ['self', 'dragon'] }
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
  ],
  expansion: 1
}

const FIRE_DEMON: ArtifactType = {
  id: 'artifact-43',
  title: 'Fire Demon',
  type: 'artifact',
  creature: 'demon',
  cost: {
    red: 2,
    black: 2
  },
  collect: {
    red: 1
  },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            red: 1
          }
        }
      },
      reward: {
        attack: {
          value: 2
        }
      }
    },
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
          resources: { red: 3 },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const GOLDEN_LION: ArtifactType = {
  id: 'artifact-44',
  title: 'Golden Lion',
  type: 'artifact',
  creature: 'creature',
  cost: {
    red: 2,
    green: 1,
    blue: 1,
    gold: 1
  },
  collect: {
    blue: 1,
    green: 1,
    red: 1
  },
  reactions: [
    {
      type: 'any-life-loss',
      cost: {
        tap: 'self'
      },
      reward: {
        ignore: true
      }
    }
  ],
  points: 1,
  expansion: 1
}

const HOMUNCULUS: ArtifactType = {
  id: 'artifact-45',
  title: 'Homunculus',
  type: 'artifact',
  creature: 'demon',
  cost: {
    green: 1
  },
  discount: {
    type: 'demon',
    resources: {
      wild: 2
    }
  },
  actions: [
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          resources: {
            wild: 2,
            wildRestrictions: 'gold'
          },
          target: 'self'
        }
      }
    }
  ],
  expansion: 1
}

const HOUND_OF_DEATH: ArtifactType = {
  id: 'artifact-46',
  title: 'Hound of Death',
  type: 'artifact',
  creature: { and: ['demon', 'creature'] },
  cost: {
    green: 3,
    black: 2
  },
  collect: {
    black: 2
  },
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
        attack: {
          value: 2
        }
      }
    },
    {
      cost: {
        tap: 'self'
      },
      reward: {
        gain: {
          equalToRival: ['black', 'gold'],
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const INFERNAL_ENGINE: ArtifactType = {
  id: 'artifact-47',
  title: 'Infernal Engine',
  type: 'artifact',
  cost: {
    black: 1
  },
  collect: {
    red: 1
  },
  actions: [
    {
      cost: { tap: 'self', discard: { anyResources: true } },
      reward: {
        gain: {
          sameResourcesAsCost: true,
          target: 'self'
        }
      }
    },
    {
      cost: { tap: 'self' },
      reward: {
        gain: {
          target: 'player',
          allResourcesFromAnyItem: true
        }
      }
    }
  ],
  expansion: 1
}

const POSSESSED_DEMON_SLAYER: ArtifactType = {
  id: 'artifact-48',
  title: 'Possessed Demon Slayer',
  type: 'artifact',
  creature: 'demon',
  cost: {
    gold: 1,
    red: 1,
    black: 1
  },
  actions: [
    {
      cost: {
        tap: 'self'
      },
      reward: {
        gain: {
          equalToRival: ['red', 'demon'],
          target: 'player'
        }
      }
    }
  ],
  reactions: [
    {
      type: 'demon',
      reward: { ignore: true }
    }
  ],
  points: 1,
  expansion: 1
}

const PRISMATIC_DRAGON: ArtifactType = {
  id: 'artifact-49',
  title: 'Prismatic Dragon',
  type: 'artifact',
  creature: 'dragon',
  cost: {
    red: 2,
    green: 2,
    blue: 2
  },
  collect: {
    wild: 1,
    wildRestrictions: { and: ['gold', 'black'] }
  },
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
        gain: {
          resources: {
            wild: 4,
            wildRestrictions: 'gold'
          },
          target: 'self'
        }
      }
    }
  ],
  points: 1,
  expansion: 1
}

const SHADOWY_FIGURE: ArtifactType = {
  id: 'artifact-50',
  title: 'Shadowy Figure',
  type: 'artifact',
  creature: 'demon',
  cost: {
    blue: 2,
    black: 2
  },
  collect: {
    blue: 1
  },
  actions: [
    {
      cost: {
        tap: 'self',
        discard: {
          resources: {
            blue: 1
          }
        }
      },
      reward: {
        drawAndDiscard: [2, 1]
      }
    },
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
            blue: 3
          },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const VIAL_OF_LIGHT: ArtifactType = {
  id: 'artifact-51',
  title: 'Vial of Light',
  type: 'artifact',
  cost: {},
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { black: 1 } } },
      reward: { gain: { resources: { green: 1, red: 1 }, target: 'player' } }
    }
  ],
  reactions: [
    {
      type: 'artifact-destroyed',
      reward: {
        gain: {
          resources: { wild: 1, wildRestrictions: { and: ['gold', 'black'] } },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const VORTEX_OF_DESTRUCTION: ArtifactType = {
  id: 'artifact-52',
  title: 'Vortex of Destruction',
  type: 'artifact',
  creature: 'demon',
  cost: {
    red: 2,
    green: 2,
    black: 1
  },
  collect: {
    black: 1,
    red: 1
  },
  actions: [
    {
      cost: {
        tap: 'self',
        destroy: 'anotherArtifact'
      },
      reward: {
        destroyedArtifactBonus: {
          wild: 2,
          wildRestrictions: 'gold'
        }
      }
    },
    {
      cost: { tap: 'self', discard: { resources: { green: 1 } } },
      reward: { gain: { resources: { black: 3 }, target: 'player' } }
    }
  ],
  expansion: 1
}

export const ARTIFACTS = [
  /* Starting Hand */
  DRAGON_TEETH,
  ELEMENTAL_SPRING,
  HAND_OF_GLORY,
  CHALICE_OF_LIFE,
  FLAMING_PIT,
  VAULT,
  CELESTIAL_HORSE,
  MAGICAL_SHARD,
  TREE_OF_LIFE,
  DANCING_SWORD,
  FOUNTAIN_OF_YOUTH,
  HAWK,
  /* Base */
  ATHANOR,
  BONE_DRAGON,
  CHALICE_OF_FIRE,
  CORRUPT_ALTAR,
  CRYPT,
  CURSED_SKULL,
  DRAGON_BRIDLE,
  DRAGON_EGG,
  DWARVEN_PICKAXE,
  EARTH_DRAGON,
  ELVISH_BOW,
  FIRE_DRAGON,
  FIERY_WHIP,
  GUARD_DOG,
  HORN_OF_PLENTY,
  HYPNOTIC_BASIN,
  JEWELED_STATUETTE,
  MERMAID,
  NIGHTINGALE,
  PHILOSOPHERS_STONE,
  PRISM,
  RING_OF_MIDAS,
  SACRIFICIAL_DAGGER,
  SEA_SERPENT,
  TREANT,
  WATER_DRAGON,
  WIND_DRAGON,
  WINDUP_MAN,
  /* Expansion 1 */
  CHAOS_IMP,
  CURSED_DWARVEN_KING,
  FIRE_DEMON,
  GOLDEN_LION,
  HOMUNCULUS,
  HOUND_OF_DEATH,
  INFERNAL_ENGINE,
  POSSESSED_DEMON_SLAYER,
  PRISMATIC_DRAGON,
  SHADOWY_FIGURE,
  VIAL_OF_LIGHT,
  VORTEX_OF_DESTRUCTION
]
