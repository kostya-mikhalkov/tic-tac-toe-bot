import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import elementTypes from "../../types/elementTypes";

export interface ChoiceState {
    selection: elementTypes;
}

const initialState: ChoiceState = {
    selection: ""
}

const choiceSlice = createSlice({
    name: 'choice',
    initialState,
    reducers: {
        selectXO: (state, action: PayloadAction<elementTypes>) => {
            state.selection = action.payload
        },
    },
})
console.log(choiceSlice)

export const { selectXO } = choiceSlice.actions;
export const choiseReducer = choiceSlice.reducer;