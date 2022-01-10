import React, { isValidElement } from 'react'
import * as R from 'ramda'
import {
  And,
  Or,
  ItemType,
  Creature,
  Resources,
  Action,
  ActionCost,
  ActionReward,
  TapType,
  DestroyType,
  DiscardType,
  ResourceType,
  UnTapType,
  Gain
} from '../../types/types'
import { getAnd, getOr } from '../../types/functions'

import demonSrc from '../../assets/demon.png'
import dragonSrc from '../../assets/dragon.png'
import creatureSrc from '../../assets/creature.png'
import collectIconSrc from '../../assets/collect.png'
import actionArrowSrc from '../../assets/action-arrow.png'
import cardSrc from '../../assets/card.png'
import tapSrc from '../../assets/tap.png'
import unTapSrc from '../../assets/unTap.png'
import thisCompSrc from '../../assets/this-comp.png'
import discardSrc from '../../assets/discard.png'
import equalsSrc from '../../assets/equals.png'
import redSrc from '../../assets/red.png'
import greenSrc from '../../assets/green.png'
import blueSrc from '../../assets/blue.png'
import blackSrc from '../../assets/black.png'
import goldSrc from '../../assets/gold.png'
import anySrc from '../../assets/any-comp.png'
import anyReverseSrc from '../../assets/any-comp-reverse.png'

import './Item.scss'

interface ItemProps {
  value: ItemType
}

export const Item = ({ value }: ItemProps) => {
  const {
    cost,
    title,
    creature,
    collect,
    // collectSpecial,
    discount,
    actions,
    reactions,
    points,
    expansion,
    startingHand
  } = value
  return (
    <div className='item'>
      <div className='title'>{title}</div>
      <div className='imageBox'>
        {cost && costUi(cost)}
        {creature && creaturesUi(creature)}

        {collect && collectUi(collect)}
        {/* {collectSpecial && <div>{JSON.stringify(collectSpecial)}</div>} */}
      </div>

      {discount && <div className='discount'>{JSON.stringify(discount)}</div>}

      {actions && actionsUi(actions)}

      {reactions &&
        reactions.map((r, index) => (
          <div key={index} className='reaction'>
            {JSON.stringify(r)}
          </div>
        ))}
      <div className='footer'>
        {points && <div className='points bold glowTextLight'>{points}</div>}

        {expansion && <div className='moon'></div>}

        {startingHand && (
          <div className={'startingHand color' + startingHand}>
            {startingHand}
          </div>
        )}
      </div>
    </div>
  )
}

const costUi = (value: Resources) => {
  if (!Object.keys(value).length) {
    return (
      <div className='cost'>
        <div className='resources'>{getColorUi(0, 'zero')}</div>
        <div className='triangle'></div>
      </div>
    )
  }

  const { gold, wild, red, green, blue, black } = value
  return (
    <div className='cost'>
      <div className='resources'>
        {gold && getColorUi(gold, 'gold')}
        {wild && getColorUi(wild, 'wild')}
        {red && getColorUi(red, 'red')}
        {green && getColorUi(green, 'green')}
        {blue && getColorUi(blue, 'blue')}
        {black && getColorUi(black, 'black')}
      </div>
      <div className='triangle'></div>
    </div>
  )
}

const colorUi = (discard: boolean) => (
  value: number | string | undefined,
  className: string = '',
  wildRestrictions?: And<ResourceType>,
  withEquals?: boolean
) => {
  if (R.isNil(value)) return undefined

  const classes = [
    'resource bold glowTextLight',
    className,
    discard ? 'discard' : ''
  ].join(' ')
  return (
    <div className={classes}>
      <div className='number'>{value !== 1 ? value : ''}</div>
      {wildRestrictions && (
        <div className='wildRestrictions'>
          <div className='glowTextDark'>(</div>
          {getAnd<ResourceType>(wildRestrictions).map((r, i) => (
            <div key={'restriction' + i} className='wildRestriction'>
              <img className='image ' src={getColorSrc(r)} alt={r} />
              <div className='icon'>
                <div></div>
              </div>
            </div>
          ))}
          <div className='glowTextDark'>)</div>
        </div>
      )}
      {discard && (
        <img className='discardIcon' src={discardSrc} alt='discard' />
      )}
      {withEquals && (
        <img className='equalsIcon' src={equalsSrc} alt='equals' />
      )}
    </div>
  )
}
const getColorUi = colorUi(false)
const discardColorUi = colorUi(true)

const getColorSrc = (value: ResourceType) => {
  switch (value) {
    case 'red':
      return redSrc
    case 'green':
      return greenSrc
    case 'blue':
      return blueSrc
    case 'black':
      return blackSrc
    case 'gold':
      return goldSrc
  }
}

const creaturesUi = (value: And<Creature>) => {
  const creatures = getAnd<Creature>(value)
  return <div className='creatures'>{creatures.map(creatureUi)}</div>
}

const creatureUi = (value: Creature, index: number) => {
  const iconSrc = getCreatureSrc(value)
  return (
    <img
      key={'creature-' + index}
      className='creature'
      src={iconSrc}
      alt={value}
    />
  )
}

const getCreatureSrc = (value: Creature) => {
  switch (value) {
    case 'creature':
      return creatureSrc
    case 'dragon':
      return dragonSrc
    case 'demon':
      return demonSrc
    default:
      return undefined
  }
}

const collectUi = (value: Or<Resources>) => {
  const resources = getOr<Resources>(value).map((r, index) => {
    const { gold, red, green, blue, black, wild, wildRestrictions } = r
    return joinAndUi([
      getColorUi(gold, 'gold'),
      getColorUi(blue, 'blue'),
      getColorUi(green, 'green'),
      getColorUi(black, 'black'),
      getColorUi(red, 'red'),
      getColorUi(wild, 'wild', wildRestrictions)
    ])
  })
  return (
    <div className='collect'>
      <div className='collectContent'>
        <img className='collectIcon' src={collectIconSrc} alt='collect' />
        {joinOrUi(resources)}
      </div>
    </div>
  )
}

const joinUi = (divider: JSX.Element) => (
  array: (JSX.Element | undefined | false)[]
) => {
  return (
    <div className='join'>
      {array
        .filter(isValidElement)
        .reduce((acc: JSX.Element[], ele, index) => {
          return index === 0 ? [ele] : acc.concat(divider, ele)
        }, [])
        .map((e, i) => (
          <div key={i}>{e}</div>
        ))}
    </div>
  )
}

const plus = <div className='plus glowTextDark bold'>+</div>
const slash = <div className='slash glowTextDark'>/</div>
const joinAndUi = joinUi(plus)
const joinOrUi = joinUi(slash)

const actionsUi = (actions: Action[]) => {
  return actions.map((a, index) => {
    const { cost, reward } = a
    return (
      <div key={index} className='action'>
        {actionCost(cost)}
        <img className='actionArrow' src={actionArrowSrc} alt='action arrow' />
        {actionReward(reward)}
      </div>
    )
  })
}

const actionCost = (cost: ActionCost) => {
  const { tap, destroy, discard } = cost

  const tapElements = tap ? getAnd<TapType>(tap).map(tapUi) : []
  const destroyElements = destroy ? [destroyUi(destroy)] : []
  const discardElements = discard ? [discardUi(discard)] : []

  const costArray = [...tapElements, ...destroyElements, ...discardElements]
  return joinAndUi(costArray)
}

const tapUi = (value: TapType, index: number) => {
  const imgSrc = getTapSrc(value)
  return (
    <div key={'tap-' + index} className={'tap ' + value}>
      <img className='image' src={imgSrc} alt={value} />
      <img className='arrow' src={tapSrc} alt={value} />
    </div>
  )
}

const destroyUi = (value: DestroyType) => {
  return (
    <div key='destroy-0' className={'destroy ' + value}>
      <div className='bold glowTextDark sidePadding2'>
        {getDestroyText(value)}
      </div>
      {value === 'self' && thisComp}
    </div>
  )
}

const thisComp = (
  <div className='thisComp'>
    <img className='card' src={cardSrc} alt='this component' />
    <img className='thisArrow' src={thisCompSrc} alt='this component' />
  </div>
)

const getDestroyText = (value: DestroyType) => {
  switch (value) {
    case 'self':
      return <>Destroy</>
    case 'anotherArtifact':
      return (
        <>
          destroy <i>another</i> of your artifacts
        </>
      )
    case 'anyArtifact':
      return (
        <>
          destroy <i>any</i> one of your artifacts
        </>
      )
    case 'creature':
      return (
        <>
          destroy one of your <i>Creatures</i>
        </>
      )
    case 'dragonOrCreature':
      return (
        <>
          destroy one of your <i>Dragons</i> or <i>Creatures</i>
        </>
      )
  }
}

const discardUi = (value: DiscardType) => {
  const {
    resources,
    anyResources,
    wildDiscard,
    anyCreature,
    aCard,
    resourcesOnSelf
  } = value

  const discardArray = [
    resources && getDiscardResources(resources, !!resourcesOnSelf),
    anyResources && discardColorUi('?', 'wild'),
    wildDiscard && discardColorUi('?', 'wild', undefined, true),
    anyCreature && discardAnyCreature,
    aCard && discardACard
  ]

  return joinAndUi(discardArray)
}

const discardAnyCreature = (
  <div className='discardAnyCreature'>
    <div className='bold glowTextDark discardText'>discard</div>
    {joinOrUi([
      <img className='discardCreature' src={demonSrc} alt='demon' />,
      <img className='discardCreature' src={dragonSrc} alt='dragon' />,
      <img className='discardCreature' src={creatureSrc} alt='creature' />
    ])}
  </div>
)

const discardACard = (
  <div className='bold glowTextDark discardACard'>discard a card</div>
)

const getDiscardResources = (resources: Or<Resources>, onSelf: boolean) => {
  const resourcesArray = resources ? getOr<Resources>(resources) : []

  const resourcesElements = resourcesArray.map((r) => {
    const { gold, red, green, blue, black, wild, wildRestrictions } = r
    return joinAndUi([
      discardColorUi(gold, 'gold'),
      discardColorUi(blue, 'blue'),
      discardColorUi(green, 'green'),
      discardColorUi(black, 'black'),
      discardColorUi(red, 'red'),
      discardColorUi(wild, 'wild', wildRestrictions)
    ])
  })
  const joinedElements = joinOrUi(resourcesElements)
  return withThisComp(joinedElements, onSelf)
}

const withThisComp = (elements: JSX.Element, onSelf: boolean) => {
  return onSelf ? (
    <div className='withThisComp'>
      {elements}
      <div className='bold glowTextDark sidePadding2'>on</div>
      {thisComp}
    </div>
  ) : (
    elements
  )
}

const actionReward = (reward: ActionReward) => {
  const { unTap, gain, rivalsGainResource } = reward

  const gainElements = gain ? getGain(gain) : []

  const rewardArray = [
    unTap && unTapUi(unTap),
    ...gainElements,
    rivalsGainResource && getRivalsGain(rivalsGainResource)
  ]
  return joinAndUi(rewardArray)
}

const unTapUi = (value: UnTapType) => {
  const imgSrc = getTapSrc(value)
  return (
    <div className={'unTap ' + value}>
      <img className='image' src={imgSrc} alt={value} />
      {value === 'self' && [
        <img
          key='self0'
          className='thisArrow'
          src={thisCompSrc}
          alt='this component'
        />,
        <div key='self1' className='bold glowTextDark text'>
          (when this card is turned)
        </div>
      ]}
      {value === 'allDemons' && [
        <div key='demons0' className='bold glowTextDark'>
          All players'
        </div>,
        <img key='demons1' className='image2' src={imgSrc} alt='demon2' />,
        <img key='demons2' className='image3' src={imgSrc} alt='demon3' />
      ]}
      <img className='arrow' src={unTapSrc} alt={value} />
    </div>
  )
}

const getTapSrc = (value: TapType | UnTapType) => {
  switch (value) {
    case 'creature':
      return creatureSrc
    case 'dragon':
      return dragonSrc
    case 'demon':
    case 'allDemons':
      return demonSrc
    case 'self':
      return cardSrc
    case 'any':
      return anyReverseSrc
  }
}

const getGain = (value: Gain) => {
  const { resources, target } = value
  return [
    resources && getGainResources(resources, target === 'self')
    // <div>gain other</div>
  ]
}

const getGainResources = (resources: Resources, onSelf: boolean) => {
  const { gold, red, green, blue, black, wild, wildRestrictions } = resources
  const joinedElements = joinAndUi([
    getColorUi(gold, 'gold'),
    getColorUi(blue, 'blue'),
    getColorUi(green, 'green'),
    getColorUi(black, 'black'),
    getColorUi(red, 'red'),
    getColorUi(wild, 'wild', wildRestrictions)
  ])
  return withThisComp(joinedElements, onSelf)
}

const getRivalsGain = (value: ResourceType) => {
  return <div>rivals gain</div>
}
