import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { usersReducer } from './slices/user.slice';
import { chatReducer } from './slices/chat.slice';
import { messagesReducer } from './slices/message.slice';
import { profileReducer } from './slices/profile.slice';
import type { StateSchema } from '@/store/types.ts';


const rootReducer: Reducer<StateSchema> = combineReducers({
  users: usersReducer,
  chats: chatReducer,
  messages: messagesReducer,
  profile: profileReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
