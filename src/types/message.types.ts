import {UserId} from "./user.types"
import {ChatId} from "./chat.types"


export type MessageId = string;

export type MessageType =
  | 'text'
  | 'voice'
  | 'video'
  | 'file'
  | 'link'
  | 'reply'
  | 'forward';


export type FileAttachment = {
  id: string;
  url: string;
  fileName: string;
  mimeType: string;
  size: number;
  durationSec?: number; // для аудио/видео
  previewUrl?: string; // миниатюра
};

export type LinkPreview = {
  url: string;
  title?: string;
  description?: string;
  imageUrl?: string | null;
};

export type Reaction = {
  emoji: string;
  userId: UserId;
  createdAt: number;
};

export type MessageCommon = {
  id: MessageId;
  chatId: ChatId;
  senderId: UserId;
  createdAt: number;
  updatedAt?: number; // для edit
  deletedAt?: number | null; // soft delete
  isEdited: boolean;
  isPinned: boolean;
  reactions: Reaction[];
};

export type TextMessage = MessageCommon & {
  type: "text";
  text: string;
  linkPreviews: LinkPreview[];
};

export type VoiceMessage = MessageCommon & {
  type: "voice";
  file: FileAttachment; // .mp3, .m4a, .opus
};

export type VideoMessage = MessageCommon & {
  type: "video";
  file: FileAttachment; // .mp4, .mkv
  thumbnailUrl: string;
};

export type FileMessage = MessageCommon & {
  type: "file";
  file: FileAttachment;
};

export type LinkMessage = MessageCommon & {
  type: "link";
  linkPreview: LinkPreview;
};

export type ReplyMessage = MessageCommon & {
  type: "reply";
  text: string;
  replyTo: {
    messageId: MessageId;
    chatId: ChatId;
    senderId: UserId;
    text?: string; // short preview
  };
  linkPreviews: LinkPreview[];
};

export type ForwardMessage = MessageCommon & {
  type: "forward";
  forwardedFrom: {
    messageId: MessageId;
    chatId: ChatId;
    senderId: UserId;
  };
  originalText?: string;
};

export type Message =
  | TextMessage
  | VoiceMessage
  | VideoMessage
  | FileMessage
  | LinkMessage
  | ReplyMessage
  | ForwardMessage;