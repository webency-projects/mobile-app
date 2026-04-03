import { createSlice } from '@reduxjs/toolkit';
import { User, UserId } from '@/types/user.types.ts';

import {MOCK_USERS} from "@/store/mock.ts"


export interface UserSchema {
  data: Record<UserId, User>
}
const initialState: UserSchema = {
  data: MOCK_USERS
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  }
})

export const {} = usersSlice.actions;
export const usersReducer =  usersSlice.reducer
