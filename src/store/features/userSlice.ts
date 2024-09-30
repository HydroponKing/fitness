import { createSlice } from '@reduxjs/toolkit'

type UserStateType = {
	test: string
}

const initialState: UserStateType = {
	test: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setTest: (state, action) => {
			state.test = action.payload
		},
	},
})

export const { setTest } = userSlice.actions
export const userReducer = userSlice.reducer
