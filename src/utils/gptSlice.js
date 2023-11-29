import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !showGptSearch;
        }
    }
})

export const { showGptSearch } = gptSlice.actions;
export default gptSlice.reducer;