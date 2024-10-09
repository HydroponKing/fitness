import { createSlice } from '@reduxjs/toolkit'

type UserStateType = {
	isUser: boolean
}

const initialState: UserStateType = {
	isUser: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsUser: (state, action) => {
			state.isUser = action.payload
		},
	},
})

export const { setIsUser } = userSlice.actions
export const userReducer = userSlice.reducer
