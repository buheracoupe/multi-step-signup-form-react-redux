import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    duration: "monthly"
}
const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        setPlan: (state, action) => {
            state.duration = action.payload;
        }
    }
})

export const { setPlan } = planSlice.actions;

export default planSlice.reducer