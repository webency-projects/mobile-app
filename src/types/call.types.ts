import {UserId} from "./user.types"
import {ChatId} from "./chat.types"


export type CallId = string;
export type CallStatus = 'ringing' | 'active' | 'ended' | 'cancelled' | 'rejected';

export type CallMediaType = 'audio' | 'audioVideo';

export type CallMember = {
  userId: UserId;
  joinedAt?: number;
  durationSec?: number; // длительность звонка
};

export type Call = {
  id: CallId;
  type: CallMediaType;
  status: CallStatus;
  initiatorId: UserId;
  participants: CallMember[];
  chatId: ChatId; // к какому чату привязан звонок
  startedAt?: number;
  endedAt?: number;
  durationSec?: number; // итоговая длина
  isGroup: boolean; // true – групповой звонок
};