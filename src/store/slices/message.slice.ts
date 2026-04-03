import { createSlice } from '@reduxjs/toolkit';
import { Message, MessageId } from '@/types/message.types.ts';

import {MOCK_MESSAGES} from "@/store/mock.ts"


export interface MessagesSchema {
  data: Record<MessageId, Message>
}

const initialState: MessagesSchema = {
  data: MOCK_MESSAGES,
}

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {

  },
});


export const {} = messageSlice.actions;
export const messagesReducer =  messageSlice.reducer;

