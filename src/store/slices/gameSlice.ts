import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import elementTypes from '../../types/elementTypes';

interface gameState {
    board: string[],
    currentPlayer: elementTypes,
    botDifficulty: 'easy' | 'medium' | 'hard',
    botMove: boolean
}

const initialState: gameState = {
    board: Array(9).fill(""),
    currentPlayer: "",
    botDifficulty: "easy",
    botMove: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addElements: (state, action: PayloadAction<number>) => {
            state.board[action.payload] = state.currentPlayer
        },
        addPlayer: (state, action: PayloadAction<elementTypes>) => {
            state.currentPlayer = action.payload
        },
        addDifficulty: (state, action: PayloadAction<'easy' | 'medium' | 'hard'>) => {
            state.botDifficulty = action.payload
        },
        botMoveOnBoard: (state, action: PayloadAction<boolean>) => {
            state.botMove = action.payload
        }
    }
})

export const {addElements, addPlayer, addDifficulty, botMoveOnBoard} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;