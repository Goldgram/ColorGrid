import React, { useState } from 'react'
import { MAGES } from '../consts/mages'
import { ARTIFACTS } from '../consts/artifacts'
import { MONUMENTS } from '../consts/monuments'
// import { MAGIC_ITEMS } from '../consts/magic-items'
// import { SCROLLS } from '../consts/scrolls'
import { PLACES_OF_POWER } from '../consts/places-of-power'
import { Item } from '../components/Item/Item'
import { ItemType } from '../types/types'

import './Game.scss'

export const Game = () => {
  const flattenedPoP = PLACES_OF_POWER.reduce((acc: any[], pop: any) => {
    return acc.concat(pop.sideA, pop.sideB)
  }, [])
  return (
    <>
      <Card title='Mages' list={MAGES} initIndex={5} />
      <br />
      <Card title='Arfitacts' list={ARTIFACTS} initIndex={25} />
      <br />
      <Card title='Monuments' list={MONUMENTS} initIndex={12} />
      <br />
      <Card title='Places of Power' list={flattenedPoP} initIndex={12} />
    </>
  )
}

interface CardProps {
  title: string
  list: ItemType[]
  initIndex?: number
}

const Card = ({ title, list, initIndex = 0 }: CardProps) => {
  const [index, setIndex] = useState(initIndex)
  return (
    <>
      <>
        {title}: {index}
      </>
      <div className='card-display'>
        <button onClick={() => setIndex(index - 1)} disabled={index < 1}>
          Prev
        </button>

        <Item value={list[index]} />

        <button
          onClick={() => setIndex(index + 1)}
          disabled={index >= list.length - 1}
        >
          Next
        </button>
      </div>
    </>
  )
}
