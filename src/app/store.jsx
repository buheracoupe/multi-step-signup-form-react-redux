import { configureStore } from '@reduxjs/toolkit'
import activeSectionReducer  from "./activeSectionSlice"
import planReducer from "./planChoiceSlice"

export const store = configureStore({
  reducer: {
   active: activeSectionReducer,
   plan: planReducer,
  }
})