import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface scoreState {
    scoreX: number,
    scoreO: number
}

const initialState: scoreState = {
    scoreX: 0,
    scoreO: 0
}

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        scoreX: (state, action: PayloadAction<number>) => {
            state.scoreX = action.payload
        },
        scoreO: (state, action: PayloadAction<number>) => {
            state.scoreO = action.payload
        }
    }
});

export const {scoreX, scoreO} = scoreSlice.actions;
export const scoreReducer = scoreSlice.reducer;