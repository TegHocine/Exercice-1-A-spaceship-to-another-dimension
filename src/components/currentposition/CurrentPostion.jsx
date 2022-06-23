import React from 'react'

import Title from '../title/Title'

import { useSelector } from 'react-redux'

import './currentPosition.css'

const CurrentPostion = () => {
  const position = useSelector((state) => state.position)
  return (
    <>
      <Title title={'Current Position'} />
      <div className='currentpos__position'>{`${
        position.x + ',' + position.y + ',' + position.cardinal
      }`}</div>
    </>
  )
}

export default CurrentPostion
