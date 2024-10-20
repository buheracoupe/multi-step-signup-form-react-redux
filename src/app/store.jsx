import { configureStore } from '@reduxjs/toolkit'
import activeSectionReducer  from "./activeSectionSlice"

export const store = configureStore({
  reducer: {
   active: activeSectionReducer,
  }
})