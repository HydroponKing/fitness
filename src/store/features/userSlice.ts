import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getCourses, getCoursesWithProgress, getUserCourses, getWorkouts } from '../../api/api'
import { courseType, WorkoutType } from '../../api/types'
import { UserCoursesType } from '../../lib/authTypes'

export const getCoursesData = createAsyncThunk(
	'courses/getAllCourses',
	async () => {
		const data = await getCoursesWithProgress()
		return data
	},
)

// export const getCourseWorkouts = createAsyncThunk(
// 	'courses/getCourseWorkouts',
// 	async (courseId: string) => {
// 		const data = await getWorkouts(courseId)
// 		return data
// 	},
// )

export const getUserCoursesData = createAsyncThunk(
	'userCourses/getUserCourses',
	async (userId: string | undefined) => {
		const data = await getUserCourses(userId)
		return data
	},
)

type UserStateType = {
	courses: courseType[]
	// courceWorkouts: WorkoutType[]
	userCourses: UserCoursesType[]
	isLoading: boolean
}

const initialState: UserStateType = {
	courses: [],
	// courceWorkouts: [],
	userCourses: [],
	isLoading: true,
}

const userSlice = createSlice({
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
			// .addCase(getCourseWorkouts.fulfilled, (state, action) => {
			// 	state.courceWorkouts = action.payload
			// 	state.isLoading = false
			// })
			.addCase(getUserCoursesData.fulfilled, (state, action) => {
				state.userCourses = action.payload
				state.isLoading = false
			})
	},
})

export const { setCourses } = userSlice.actions
export const userReducer = userSlice.reducer
