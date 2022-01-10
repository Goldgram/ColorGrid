import { MagicItemType } from '../types/types'

const CALM_OR_ELAN: MagicItemType = {
  id: 'magic-item-1',
  title: 'Calm / Elan',
  type: 'magic-item',
  collect: { or: [{ blue: 1 }, { red: 1 }] }
}

const DEATH_OR_LIFE: MagicItemType = {
  id: 'magic-item-2',
  title: 'Death / Life',
  type: 'magic-item',
  collect: { or: [{ black: 1 }, { green: 1 }] }
}

const ALCHEMY: MagicItemType = {
  id: 'magic-item-3',
  title: 'Alchemy',
  type: 'magic-item',
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 4 } } },
      reward: {
        gain: {
          resources: { gold: 2 },
          target: 'player'
        }
      }
    }
  ]
}

const DIVINATION: MagicItemType = {
  id: 'magic-item-4',
  title: 'Divination',
  type: 'magic-item',
  actions: [
    {
      cost: { tap: 'self' },
      reward: { drawAndDiscard: [3, 3] }
    }
  ]
}

const PROTECTION: MagicItemType = {
  id: 'magic-item-5',
  title: 'Protection',
  type: 'magic-item',
  reactions: [
    {
      type: 'any-life-loss',
      cost: { tap: 'self' },
      reward: { ignore: true }
    }
  ]
}

const REANIMATE: MagicItemType = {
  id: 'magic-item-6',
  title: 'Reanimate',
  type: 'magic-item',
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 1 } } },
      reward: { unTap: 'any' }
    }
  ]
}

const RESEARCH: MagicItemType = {
  id: 'magic-item-7',
  title: 'Research',
  type: 'magic-item',
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 1 } } },
      reward: { drawCards: 1 }
    }
  ]
}

const TRANSMUTATION: MagicItemType = {
  id: 'magic-item-8',
  title: 'Transmutation',
  type: 'magic-item',
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 3 } } },
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
  ]
}

/* Expansion 1 */

const INSCRIPTION: MagicItemType = {
  id: 'magic-item-9',
  title: 'Inscription',
  type: 'magic-item',
  actions: [
    {
      cost: { tap: 'self', discard: { resources: { wild: 1 } } },
      reward: { claimScroll: true }
    }
  ],
  expansion: 1
}

const ILLUSION: MagicItemType = {
  id: 'magic-item-10',
  title: 'Illusion',
  type: 'magic-item',
  reactions: [
    {
      type: 'player-using-power',
      cost: { tap: 'self' },
      reward: { thisTurnActAs: { or: ['creature', 'demon'] } }
    },
    {
      type: 'player-using-power',
      cost: { tap: 'self', discard: { resources: { wild: 2 } } },
      reward: { thisTurnActAs: 'dragon' }
    }
  ],
  expansion: 1
}

export const MAGIC_ITEMS = [
  CALM_OR_ELAN,
  DEATH_OR_LIFE,
  ALCHEMY,
  DIVINATION,
  PROTECTION,
  REANIMATE,
  RESEARCH,
  TRANSMUTATION,
  /* Expansion 1 */
  INSCRIPTION,
  ILLUSION
]
