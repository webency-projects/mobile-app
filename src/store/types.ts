import { UserSchema } from './slices/user.slice';
import { ChatSchema } from './slices/chat.slice';
import { MessagesSchema } from './slices/message.slice';
import { ProfileSchema } from "./slices/profile.slice"

export type StateSchema = {
  users: UserSchema;
  chats: ChatSchema;
  messages: MessagesSchema;
  profile: ProfileSchema;
};

export type StateSchemaKey = keyof StateSchema;
