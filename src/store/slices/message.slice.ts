import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ChatId} from "@/types/chat.types"
import {MOCK_MESSAGES} from "@/store/mock.ts"
import { AppState } from '@/store/types.ts';
import { Message, MessageId } from '@/types/message.types.ts';

const initialState =  MOCK_MESSAGES as Record<MessageId, Message>

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setCurrentChatId(state:AppState, payload: PayloadAction<ChatId | null>) {
      state.currentChatId = payload
    },
  },
});
