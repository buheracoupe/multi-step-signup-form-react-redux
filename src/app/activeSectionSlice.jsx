import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    section: 1
}

const activeSectionSlice = createSlice({
    name: "active",
    initialState,
    reducers: {
        section1: (state) => {
            state.section = 1;
        },
        section2: (state) => {
            state.section = 2;
    },
        section3: (state) => {
            state.section = 3;
        },
        section4: (state) => {
            state.section = 4;
        },
    }

})

 export const {section1, section2, section3, section4} = activeSectionSlice.actions;
export default activeSectionSlice.reducer;

