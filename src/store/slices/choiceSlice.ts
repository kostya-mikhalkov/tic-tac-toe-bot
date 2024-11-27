import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChoiceState {
    selection: string
}

const initialState: ChoiceState = {
    selection: ''
}

const choiceSlice = createSlice({
    name: 'choice',
    initialState,
    reducers: {
        selectXO: (state, action: PayloadAction<string>) => {
            state.selection = action.payload
        },
    },
})

export const { selectXO } = choiceSlice.actions;
export const choiseReducer = choiceSlice.reducer;