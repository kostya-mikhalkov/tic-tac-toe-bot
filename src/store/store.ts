import { configureStore } from "@reduxjs/toolkit";
import { choiseReducer } from "./slices/choiceSlice";

export const store = configureStore({
  reducer: {
    choice: choiseReducer, 
  },
});

// Выводим типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
