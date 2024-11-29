import { createSlice,  PayloadAction} from "@reduxjs/toolkit";

interface rivalState {
    rival: boolean
}

const initialState: rivalState = {
    rival: false
}

const rivalSlice = createSlice({
    name: 'rival',
    initialState,
    reducers: {
        rival: (state, action: PayloadAction<boolean>) => {
            state.rival = action.payload;
        }
    }
})

export const {rival} = rivalSlice.actions;
export const rivalReducer = rivalSlice.reducer;