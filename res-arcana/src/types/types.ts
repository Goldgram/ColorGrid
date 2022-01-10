// Generic

export type Creature = 'dragon' | 'creature' | 'demon'

export type ResourceType = 'red' | 'green' | 'blue' | 'black' | 'gold'

export interface _And<T> {
  and: T[]
}
export type And<T> = T | _And<T>

export interface _Or<T> {
  or: T[]
}
export type Or<T> = T | _Or<T>

export interface Resources {
  red?: number
  green?: number
  blue?: number
  black?: number
  gold?: number
  wild?: number
  wildRestrictions?: And<ResourceType>
}

// Action / Reactions

export interface Action {
  cost: ActionCost
  reward: ActionReward
}

type ReactionType =
  | 'self-bought'
  | 'victory-check'
  | 'artifact-destroyed'
  | 'player-using-power'
  | 'any-life-loss'
  | Creature

interface Reaction {
  type: ReactionType
  cost?: ActionCost
  reward: ActionReward
}

// Action Cost

export interface ActionCost {
  tap?: And<TapType>
  destroy?: DestroyType
  discard?: DiscardType
}

export type TapType = Creature | 'self'

export type DestroyType =
  | 'self'
  | 'anotherArtifact'
  | 'anyArtifact'
  | 'creature'
  | 'dragonOrCreature'

export interface DiscardType {
  resources?: Or<Resources>
  resourcesOnSelf?: boolean
  anyResources?: boolean
  wildDiscard?: boolean
  anyCreature?: boolean
  aCard?: boolean
}

// Action Reward

export interface ActionReward {
  unTap?: UnTapType
  gain?: Gain
  rivalsGainResource?: ResourceType
  reorderTopCards?: number
  drawCards?: number
  drawAndDiscard?: [number, number]
  retrieveDiscardedCard?: number
  ignore?: boolean
  thisCheckVictoryBonus?: number
  destroyedArtifactBonus?: Resources
  destroyedArtifactInGold?: true
  claimScroll?: boolean
  checkVictoryNow?: boolean
  thisTurnActAs?: Or<Creature>
  placeFreeCreatureFromAnyPlayerDiscard?: Creature
  discount?: Discount
  attack?: Attack
}

export type UnTapType = Creature | 'self' | 'any' | 'allDemons'

export interface Gain {
  target: 'player' | 'self' | 'any'
  resources?: Resources
  equalToRival?: [ResourceType, ResourceType | Creature]
  sameResourcesAsCost?: boolean
  allResourcesFromAnyItem?: boolean
  resourceNumberAsWildDiscard?: GainWildDiscard
}

interface GainWildDiscard {
  resource: 'gold' | 'wild-with-gold-restriction'
  divide?: number
}

interface Discount {
  type: Creature | 'artifact' | 'discarded-card'
  resources?: Resources
  free?: boolean
}

interface Attack {
  value: number
  discardToIgnore?: Resources | 'artifact' | 'card'
}

// Items

interface ItemBase {
  id: string
  title: string
  creature?: And<Creature>
  cost?: Resources
  collect?: Or<Resources>
  collectSpecial?: 'windup-man' | 'vault' | 'cursed-forge'
  discount?: Discount
  actions?: Action[]
  reactions?: Reaction[]
  points?: number
  pointsPer?: And<PointsPer>
  expansion?: number
  startingHand?: number
}

export interface ArtifactType extends ItemBase {
  type: 'artifact'
  cost: Resources
}

export interface MageType extends ItemBase {
  type: 'mage'
}

export interface MagicItemType extends ItemBase {
  type: 'magic-item'
}

export interface MonumentType extends ItemBase {
  type: 'monument'
  cost: Resources & { gold: 4 }
}

export interface ScrollType extends ItemBase {
  type: 'scroll'
  expansion: 1
}

export type ItemType =
  | ArtifactType
  | MageType
  | MagicItemType
  | MonumentType
  | ScrollType
  | PlaceOfPowerType

export interface PlaceOfPowerSet {
  id: string
  sideA: PlaceOfPowerType
  sideB: PlaceOfPowerType
  expansion?: number
}

export interface PlaceOfPowerType extends ItemBase {
  type: 'place-of-power'
  cost: Resources
}

interface PointsPer {
  type: Creature | ResourceType | 'artifact'
  points: number
  target: 'self' | 'player'
  divide?: number
}

// export interface Item {
//   info: ItemBase;
//   tapped: boolean;
//   resourcesOnItem: Resources;
// }
