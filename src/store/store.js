import { configureStore } from '@reduxjs/toolkit'
import positionReducer from '../features/position/positionSlice'
export const store = configureStore({
  reducer: {
    position: positionReducer
  }
})
