import React from 'react'

import Button from '../buttons/Button'
import CurrentPostion from '../currentposition/CurrentPostion'
import Title from '../title/Title'

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
        <Title title={'Controls'} />

        <Button buttonValue={'F'} control={() => dispatch(moveFront())} />
        <div className='buttom__keys'>
          <Button
            buttonValue={'L'}
            control={() => dispatch(orientationLeft())}
          />
          <Button buttonValue={'B'} control={() => dispatch(moveBack())} />
          <Button
            buttonValue={'R'}
            control={() => dispatch(orientationRight())}
          />
        </div>
      </div>
    </div>
  )
}

export default Controls
