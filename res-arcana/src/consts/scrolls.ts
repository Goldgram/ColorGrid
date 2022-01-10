import { ScrollType } from '../types/types'

const AUGURY: ScrollType = {
  id: 'scroll-1',
  title: 'Augury',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { blue: 1 } } },
      reward: { drawCards: 1 }
    }
  ],
  expansion: 1
}

const DESTRUCTION: ScrollType = {
  id: 'scroll-2',
  title: 'Destruction',
  type: 'scroll',
  actions: [
    {
      cost: { destroy: 'anyArtifact' },
      reward: {
        destroyedArtifactBonus: {
          wild: 1,
          wildRestrictions: 'gold'
        }
      }
    }
  ],
  expansion: 1
}

const DISJUNCTION: ScrollType = {
  id: 'scroll-3',
  title: 'Disjunction',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { gold: 1 } } },
      reward: {
        gain: {
          resources: { black: 1, blue: 1, green: 1, red: 1 },
          target: 'player'
        }
      }
    }
  ],
  expansion: 1
}

const PROJECTION: ScrollType = {
  id: 'scroll-4',
  title: 'Projection',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { wildDiscard: true } },
      reward: {
        gain: {
          target: 'player',
          resourceNumberAsWildDiscard: {
            resource: 'gold',
            divide: 3
          }
        }
      }
    }
  ],
  expansion: 1
}

const REVIVIFY: ScrollType = {
  id: 'scroll-5',
  title: 'Revivify',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { black: 1 } } },
      reward: { retrieveDiscardedCard: 1 }
    }
  ],
  expansion: 1
}

const SHIELD: ScrollType = {
  id: 'scroll-6',
  title: 'Shield',
  type: 'scroll',
  reactions: [
    {
      type: 'any-life-loss',
      reward: { ignore: true }
    }
  ],
  expansion: 1
}

const TRANSFORM: ScrollType = {
  id: 'scroll-7',
  title: 'Transform',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { wildDiscard: true } },
      reward: {
        gain: {
          target: 'player',
          resourceNumberAsWildDiscard: {
            resource: 'wild-with-gold-restriction'
          }
        }
      }
    }
  ],
  expansion: 1
}

const VITALITY: ScrollType = {
  id: 'scroll-8',
  title: 'Vitality',
  type: 'scroll',
  actions: [
    {
      cost: { discard: { resources: { red: 2 } } },
      reward: { unTap: 'any' }
    }
  ],
  expansion: 1
}

export const SCROLLS = [
  AUGURY,
  DESTRUCTION,
  DISJUNCTION,
  PROJECTION,
  REVIVIFY,
  SHIELD,
  TRANSFORM,
  VITALITY
]
