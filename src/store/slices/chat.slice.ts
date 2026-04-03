import { createSlice } from '@reduxjs/toolkit';
import { Chat, ChatId } from '@/types/chat.types';

import { MOCK_CHATS } from '@/store/mock.ts';

export interface ChatSchema {
  data: Record<ChatId, Chat>
}

const initialState: ChatSchema = {
  data: MOCK_CHATS,
}

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {}
})

export const {} = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
