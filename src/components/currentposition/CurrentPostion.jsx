import React from 'react'

import { useSelector } from 'react-redux'

import './currentPosition.css'

const CurrentPostion = () => {
  const position = useSelector((state) => state.position)
  return (
    <>
      <h3 className='currentpos__title'>Current Position</h3>
      <div className='currentpos__position'>{`${
        position.x + ',' + position.y + ',' + position.cardinal
      }`}</div>
    </>
  )
}

export default CurrentPostion
