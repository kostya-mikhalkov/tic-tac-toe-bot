import { configureStore } from "@reduxjs/toolkit";
import { choiseReducer } from "./slices/choiceSlice";
import { levelReducer } from "./slices/difficultySlice";
import { rivalReducer } from './slices/rivalSlice';
import { playReducer } from "./slices/playSlice";

export const store = configureStore({
  reducer: {
    choice: choiseReducer,
    level: levelReducer,
    rival: rivalReducer,
    play: playReducer
  },
});

// Выводим типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
