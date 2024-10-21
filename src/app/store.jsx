import { configureStore } from '@reduxjs/toolkit'
import activeSectionReducer  from "./activeSectionSlice"
import planReducer from "./planChoiceSlice"
import addOnsReducer from "./addOnsSlice"

export const store = configureStore({
  reducer: {
   active: activeSectionReducer,
   plan: planReducer,
   addOns: addOnsReducer,
  }
})