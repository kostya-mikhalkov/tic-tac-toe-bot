import { configureStore } from "@reduxjs/toolkit";
import { choiseReducer } from "./slices/choiceSlice";
import { rivalReducer } from './slices/rivalSlice';
import { playReducer } from "./slices/playSlice";
import { gameReducer } from "./slices/gameSlice";

export const store = configureStore({
  reducer: {
    choice: choiseReducer,
    rival: rivalReducer,
    play: playReducer,
    game: gameReducer
  },
});

// Выводим типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
