import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from "./slices/user.slice"
import { AppState } from '@/store/types.ts';

const rootReducer = combineReducers<AppState>({
  users: usersReducer,
  messages: {},
  chats: {},
  calls: {},
  currentChatId: null,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
