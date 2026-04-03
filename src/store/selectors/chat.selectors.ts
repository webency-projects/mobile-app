import { StateSchema } from '@/store/types';

export const getChats = (state: StateSchema) => Object.values(state.chats.data);
export const getChatById = (state: StateSchema) => (chatId: string) => state.chats.data[chatId];
