import { createSlice } from '@reduxjs/toolkit';
import {MOCK_USERS} from "@/store/mock.ts"
import { User, UserId } from '@/types/user.types.ts';

const initialState =  MOCK_USERS as Record<UserId, User>

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  }
})

export const {} = usersSlice.actions;
export default usersSlice.reducer