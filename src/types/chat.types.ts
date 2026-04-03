import {UserId} from "./user.types"
import {MessageId} from "./message.types"


export type ChatId = string;
export type ChatType = 'direct' | 'group';

export type ChatParticipant = {
  userId: UserId;
  role: 'owner' | 'admin' | 'member';
  joinedAt: number;
  lastReadAt?: number;
};

export type DirectChat = {
  id: ChatId;
  type: 'direct';
  peerId: UserId; // ID второго пользователя
  lastMessageId?: MessageId;
  updatedAt: number;
  unreadCount: number;
};

export type GroupChat = {
  id: ChatId;
  type: 'group';
  name: string;
  avatarUrl?: string;
  participants: ChatParticipant[];
  lastMessageId?: MessageId;
  updatedAt: number;
  unreadCount: number;
};

export type Chat = DirectChat | GroupChat;