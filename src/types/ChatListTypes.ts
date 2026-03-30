

type BaseListItemType = {
  id: string;
  name: string;
  avatar?: string;
  avatarStatus: boolean;
  time: string;
  isSender: boolean;
  type: 'message' | 'file' | 'fileMessage';
};

type ChatListItemMessage = {
  type: 'message'
  message: string,
} & BaseListItemType;

type FileType = "photo" | "video";

type ChatListItemFile = {
  type: 'file'
  file: FileType;
} & BaseListItemType;

type ChatListItemFileMessage = {
  type: 'fileMessage';
  file: FileType;
  message: string;
} & BaseListItemType;

export type UserChatListItemType =
  | ChatListItemMessage
  | ChatListItemFile
  | ChatListItemFileMessage;
