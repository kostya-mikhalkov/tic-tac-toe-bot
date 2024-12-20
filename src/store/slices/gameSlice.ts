import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import elementTypes from '../../types/elementTypes';

interface gameState {
    board: string[],
    currentPlayer: elementTypes,
    botDifficulty: 'easy' | 'medium' | 'hard',
    botMove: boolean,
    winner: {
             x: number,
             o: number
            },
    gameOver: boolean
}

const initialState: gameState = {
    board: Array(9).fill(""),
    currentPlayer: "",
    botDifficulty: "easy",
    botMove: false,
    winner: {
        x: 0,
        o: 0
    },
    gameOver: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addElements: (state, action: PayloadAction<number>) => {
            state.board[action.payload] = state.currentPlayer
        },
        resetGame: (state) => {
            state.board = Array(9).fill("");
            state.currentPlayer = "";
            state.botMove = false;
            state.gameOver = false;
        },
        addPlayer: (state, action: PayloadAction<elementTypes>) => {
            state.currentPlayer = action.payload
        },
        addDifficulty: (state, action: PayloadAction<'easy' | 'medium' | 'hard'>) => {
            state.botDifficulty = action.payload
        },
        botMoveOnBoard: (state, action: PayloadAction<boolean>) => {
            state.botMove = action.payload
        },
        addWinner: (state, action: PayloadAction<string>) => {
            if (action.payload === 'X') {
                state.winner.x = state.winner.x + 1;
            }
            if (action.payload === 'O') {
                state.winner.o = state.winner.o + 1;
            }
            state.gameOver = true
        },
        gameOver: (state) => {
            state.gameOver = true;
        }
    }
})

export const {addElements, addPlayer, addDifficulty, botMoveOnBoard, resetGame, addWinner, gameOver} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;