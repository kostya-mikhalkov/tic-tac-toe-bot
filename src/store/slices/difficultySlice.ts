import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface difficultyState {
    level: string
};

const initialState: difficultyState = {
    level: 'easy'
}

const difficultySlice = createSlice({
    name: 'difficulty',
    initialState,
    reducers: {
        levelChange: (state, action: PayloadAction<string>) => {
            state.level = action.payload
        }
    }
})

export const {levelChange} = difficultySlice.actions;
export const levelReducer = difficultySlice.reducer;