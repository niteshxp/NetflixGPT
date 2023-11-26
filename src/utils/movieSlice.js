import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopratedMovies: (state, action) => {
            state.topratedMovies = action.payload;
        },

    },

})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopratedMovies } = movieSlice.actions;
export default movieSlice.reducer;