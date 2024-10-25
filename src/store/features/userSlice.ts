import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserCourses } from '../../api/api'
import { UserCoursesType } from '../../lib/authTypes'

export const getUserCoursesData = createAsyncThunk(
	'userCourses/getCourses',
	async (userId: string | undefined) => {
		const data = await getUserCourses(userId)
		return data
	},
)

type UserStateType = {
	userCourses: UserCoursesType[]
	isLoading: boolean
}

const initialState: UserStateType = {
	userCourses: [],
	isLoading: true,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getUserCoursesData.fulfilled, (state, action) => {
			state.userCourses = action.payload
			state.isLoading = false
		})
	},
})

// export const {} = userSlice.actions
export const userReducer = userSlice.reducer
