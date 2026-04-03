import { User, UserId } from '@/types/user.types.ts';
import { Chat, ChatId } from '@/types/chat.types.ts';
import { Message, MessageId } from '@/types/message.types.ts';
import { Call, CallId } from '@/types/call.types.ts';


export type AppState = {
  users: Record<UserId, User>;
  chats: Record<ChatId, Chat>;
  messages: Record<MessageId, Message>;
  calls: Record<CallId, Call>;
  currentChatId: ChatId | null;
};