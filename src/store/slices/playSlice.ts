import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface playState {
    play: boolean
}

const initialState: playState = {
    play: false
}

const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        play: (state, action: PayloadAction<boolean>) => {
            state.play = action.payload;
        }
    }
})

export const {play} = playSlice.actions;
export const playReducer = playSlice.reducer;