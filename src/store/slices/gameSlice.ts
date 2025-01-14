import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import elementTypes from '../../types/elementTypes';

interface gameState {
    board: string[],
    currentPlayer: elementTypes,
    winnerPlayer: elementTypes,
    checkedWinnerBoolean: boolean,
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
    winnerPlayer: "",
    checkedWinnerBoolean: false,
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
            state.botMove = false;
            state.gameOver = false;
        },
        addPlayer: (state, action: PayloadAction<elementTypes>) => {
            state.currentPlayer = action.payload
        },
        addWinnerPlayer: (state, action: PayloadAction<elementTypes>) => {
            state.winnerPlayer = action.payload
        },
        addCheckedWinnerBoolean: (state, action: PayloadAction<boolean>) => {
            state.checkedWinnerBoolean = action.payload
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
            if (action.payload === 'Reset') {
                state.winner.o = 0;
                state.winner.x = 0;
            }
            state.gameOver = true
        },
        gameOver: (state) => {
            state.gameOver = true;
        }
    }
})

export const {addElements, addPlayer, addWinnerPlayer, addCheckedWinnerBoolean,addDifficulty, botMoveOnBoard, resetGame, addWinner, gameOver} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;