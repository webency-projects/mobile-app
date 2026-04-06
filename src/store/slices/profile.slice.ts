import { User } from '@/types/user.types.ts';
import { createSlice } from '@reduxjs/toolkit';


export interface ProfileSchema extends User {

}
const initialState: ProfileSchema = {
  id: "124fqf",
  username: "JohnSmith",
  displayName: "John Smith",
  avatarUrl: "jh",
  status: "online",
  lastSeenAt: 12,
  createdAt: 12,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {}
})

export const {} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;