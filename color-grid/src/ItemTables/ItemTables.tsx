import React from 'react'
import { MAGES } from '../consts/mages'
import { MONUMENTS } from '../consts/monuments'
import { ARTIFACTS } from '../consts/artifacts'
import { MAGIC_ITEMS } from '../consts/magic-items'
import { SCROLLS } from '../consts/scrolls'
import { PLACES_OF_POWER } from '../consts/places-of-power'

import './ItemTables.scss'

export const ItemTables = () => {
  const flattenedPoP = PLACES_OF_POWER.reduce((acc: any[], pop: any) => {
    return acc.concat(pop.sideA, pop.sideB)
  }, [])
  return (
    <div className='table-container'>
      <b>Mages: {MAGES.length}</b>
      <ItemTable
        items={MAGES}
        cols={['id', 'title', 'startingHand', 'expansion']}
      />

      <br />

      <b>Artifacts: {ARTIFACTS.length}</b>
      <ItemTable
        items={ARTIFACTS}
        cols={['id', 'title', 'startingHand', 'expansion']}
      />

      <br />

      <b>Magic Items: {MAGIC_ITEMS.length}</b>
      <ItemTable items={MAGIC_ITEMS} cols={['id', 'title', 'expansion']} />

      <br />

      <b>Monuments: {MONUMENTS.length}</b>
      <ItemTable items={MONUMENTS} cols={['id', 'title', 'expansion']} />

      <br />

      <b>Scrolls: {SCROLLS.length}</b>
      <ItemTable items={SCROLLS} cols={['id', 'title', 'expansion']} />

      <br />

      <b>Places of Power: {flattenedPoP.length}</b>
      <ItemTable items={flattenedPoP} cols={['id', 'title', 'expansion']} />
    </div>
  )
}

const ItemTable = ({ items, cols }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Expansion</th>
          {cols.includes('startingHand') && <th>Starting Hand</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((i: any) => {
          return (
            <tr>
              <td>{i.id}</td>
              <td>{i.title}</td>
              <td>{i.expansion === 1 ? 'L&T' : 'Base'}</td>
              {cols.includes('startingHand') && <td>{i.startingHand}</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
