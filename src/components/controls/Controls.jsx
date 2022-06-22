import React from 'react'
import CurrentPostion from '../currentposition/CurrentPostion'
import { useDispatch } from 'react-redux'

import {
  moveFront,
  moveBack,
  orientationLeft,
  orientationRight
} from '../../features/position/positionSlice'

import './controls.css'

const Controls = () => {
  const dispatch = useDispatch()
  return (
    <div className='controls__container'>
      <CurrentPostion />
      <div className='controls'>
        <h3>Controls</h3>
        <button className='keys' onClick={() => dispatch(moveFront())}>
          F
        </button>
        <div className='buttom__keys'>
          <button className='keys' onClick={() => dispatch(orientationLeft())}>
            L
          </button>
          <button className='keys' onClick={() => dispatch(moveBack())}>
            B
          </button>
          <button className='keys' onClick={() => dispatch(orientationRight())}>
            R
          </button>
        </div>
      </div>
    </div>
  )
}

export default Controls
