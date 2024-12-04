import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChoiceState {
    selection: "" | "X" | "O"
}

const initialState: ChoiceState = {
    selection: ""
}

const choiceSlice = createSlice({
    name: 'choice',
    initialState,
    reducers: {
        selectXO: (state, action: PayloadAction<"" | "X" | "O">) => {
            state.selection = action.payload
        },
    },
})
console.log(choiceSlice)

export const { selectXO } = choiceSlice.actions;
export const choiseReducer = choiceSlice.reducer;