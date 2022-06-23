import './board.css'

import { useSelector } from 'react-redux'
import { BOARD_SIZE } from '../../constants/boardConstant'

const Board = () => {
  // Creating the 10x10 matrix for the grid
  const board = new Array(BOARD_SIZE)
    .fill('')
    .map((row) => new Array(BOARD_SIZE).fill(''))

  const position = useSelector((state) => state.position)

  return (
    <div className='board'>
      {/* Mapping through board to create the grid needed to simulte the vehicle movement */}
      {board
        ?.reverse()
        .map((row, rowIdx) => (
          <div key={rowIdx} className='row'>
            {row?.map((cell, cellIdx) => (
              <div key={cellIdx} className='cell'>
                {cellIdx === position.x && rowIdx === position.y ? 'X' : ''}
              </div>
            ))}
          </div>
        ))
        .reverse()}
    </div>
  )
}

export default Board
