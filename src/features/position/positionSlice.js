import { createSlice } from '@reduxjs/toolkit'

import { BOARD_SIZE } from '../../constants/boardConstant'

const initialState = {
  x: 0,
  y: 0,
  cardinal: 'N'
}

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    moveFront: (state) => {
      // Check the orientation of the vehicle, move it forward  and make sure it does not cross the border
      // N => y + 1
      // S => y - 1
      // E => X + 1
      // W => X - 1
      if (state.cardinal === 'N' && state.y < BOARD_SIZE - 1) state.y += 1
      if (state.cardinal === 'S' && state.y > 0) state.y -= 1
      if (state.cardinal === 'E' && state.x < BOARD_SIZE - 1) state.x += 1
      if (state.cardinal === 'W' && state.x > 0) state.x -= 1
    },
    moveBack: (state) => {
      // Check the orientation of the vehicle, move it back and make sure it does not cross the border
      // N => y - 1
      // S => y + 1
      // E => X - 1
      // W => X + 1
      if (state.cardinal === 'N' && state.y > 0) state.y -= 1
      if (state.cardinal === 'S' && state.y < BOARD_SIZE - 1) state.y += 1
      if (state.cardinal === 'E' && state.x > 0) state.x -= 1
      if (state.cardinal === 'W' && state.x < BOARD_SIZE - 1) state.x += 1
    },
    orientationRight: (state) => {
      // Switching the vehicle orientation clockwise
      // N -> E -> S -> W
      switch (state.cardinal) {
        case 'N':
          state.cardinal = 'E'
          break
        case 'E':
          state.cardinal = 'S'
          break
        case 'S':
          state.cardinal = 'W'
          break
        case 'W':
          state.cardinal = 'N'
          break
        default:
          return
      }
    },
    // Switching the vehicle orientation counter-clockwise
    // N -> W -> S -> E
    orientationLeft: (state) => {
      switch (state.cardinal) {
        case 'N':
          state.cardinal = 'W'
          break
        case 'E':
          state.cardinal = 'N'
          break
        case 'S':
          state.cardinal = 'E'
          break
        case 'W':
          state.cardinal = 'S'
          break
        default:
          return
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { moveFront, moveBack, orientationRight, orientationLeft } =
  positionSlice.actions

export default positionSlice.reducer
