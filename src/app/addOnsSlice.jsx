import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 addOns: []
}

const addOnsSlice = createSlice({
    name: "addOns",
    initialState,
    reducers: {
        addAddOn: (state, action) => {
            state.addOns.push(action.payload)
        },
        removeAddOn: (state, action) => {
            state.addOns = state.addOns.filter(addOn => addOn.name !== action.payload)
        },
    }

})

export const { addAddOn, removeAddOn } = addOnsSlice.actions;

export default addOnsSlice.reducer;