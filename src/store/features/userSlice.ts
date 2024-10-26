import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCourses, getUserCourses } from '../../api/api'
import { courseType } from '../../api/types'
import { UserCoursesType } from '../../lib/authTypes'

export const getCoursesData = createAsyncThunk(
	'courses/getAllCourses',
	async () => {
		const data = await getCourses()
		return data
	},
)

export const getUserCoursesData = createAsyncThunk(
	'userCourses/getUserCourses',
	async (userId: string | undefined) => {
		const data = await getUserCourses(userId)
		return data
	},
)

type UserStateType = {
	courses: courseType[]
	userCourses: UserCoursesType[]
	isLoading: boolean
}

const initialState: UserStateType = {
	courses: [],
	userCourses: [],
	isLoading: true,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getCoursesData.fulfilled, (state, action) => {
				state.courses = action.payload.sort((a, b) => a.order - b.order)
				state.isLoading = false
			})
			.addCase(getUserCoursesData.fulfilled, (state, action) => {
				state.userCourses = action.payload
				state.isLoading = false
			})
	},
})

// export const {} = userSlice.actions
export const userReducer = userSlice.reducer
