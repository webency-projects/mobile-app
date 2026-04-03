import { StateSchema } from "@/store/types"

export const getUsers = (state: StateSchema) => Object.values(state.users.data)
export const getUserById = (state: StateSchema) => (userId: string) => state.users.data[userId]
