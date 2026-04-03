import { UserSchema } from './slices/user.slice';
import { ChatSchema } from './slices/chat.slice';
import { MessagesSchema } from './slices/message.slice';

export type StateSchema = {
  users: UserSchema;
  chats: ChatSchema;
  messages: MessagesSchema;
};

export type StateSchemaKey = keyof StateSchema;
