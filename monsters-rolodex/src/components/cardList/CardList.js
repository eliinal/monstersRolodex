import './CardList.css'
import React from 'react'
import { Card } from '../card/Card'

export const CardList = props => {
  return (
    <div className="cardList">
      {props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
    </div>
  )
}