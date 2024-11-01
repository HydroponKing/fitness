import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getCoursesWithProgress, getUserCourses } from '../../api/api'
import { courseType } from '../../api/types'
import { UserCoursesType } from '../../lib/authTypes'

export const getCoursesData = createAsyncThunk(
	'courses/getAllCourses',
	async () => {
		const data = await getCoursesWithProgress()
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

type CourseStateType = {
	courses: courseType[]
	userCourses: UserCoursesType[]
	isLoading: boolean
}

const initialState: CourseStateType = {
	courses: [],
	userCourses: [],
	isLoading: true,
}

const courseSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCourses(state, action: PayloadAction<courseType[]>) {
			state.courses = action.payload
		},
	},
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

export const { setCourses } = courseSlice.actions
export const courseReducer = courseSlice.reducer
