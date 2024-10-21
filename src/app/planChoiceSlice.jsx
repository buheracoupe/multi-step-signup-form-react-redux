import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    duration: "monthly",
    planDetails: {}
}
const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        setPlan: (state, action) => {
            state.duration = action.payload;
        },
        capturePlan: (state, action) => {
            state.planDetails = action.payload;
        }
    }
})

export const { setPlan, capturePlan } = planSlice.actions;

export default planSlice.reducer