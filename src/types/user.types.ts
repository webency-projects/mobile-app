
export type UserId = string;

export type User = {
  id: UserId;
  username: string;
  displayName: string;
  avatarUrl?: string;
  status: 'online' | 'offline' | 'away';
  lastSeenAt: number;
  createdAt: number;
};