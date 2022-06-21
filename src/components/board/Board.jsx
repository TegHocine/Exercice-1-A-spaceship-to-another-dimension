import React, { useState } from 'react'

import './board.css'

const BOARD_SIZE = 10
const Board = () => {
  // Creating a const that has a 10x10 matrix
  const board = new Array(BOARD_SIZE)
    .fill('')
    .map((row) => new Array(BOARD_SIZE).fill(''))

  // Creating a state to control the rover movement
  const [rover, setRover] = useState({ x: 1, y: 5 })

  return (
    <div className='board'>
      {board?.map((row, rowIdx) => (
        <div key={rowIdx} className='row'>
          {row?.map((cell, cellIdx) => (
            <div key={cellIdx} className='cell'>
              {cellIdx === rover.x && rowIdx === rover.y ? 'X' : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
