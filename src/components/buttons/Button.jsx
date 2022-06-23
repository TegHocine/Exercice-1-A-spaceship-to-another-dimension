import React from 'react'

import './button.css'

const Button = ({ buttonValue, control }) => {
  return (
    <button className='keys' onClick={() => control()}>
      {buttonValue}
    </button>
  )
}

export default Button
