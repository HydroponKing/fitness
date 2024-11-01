import { child, get, ref, remove, set, update } from 'firebase/database'
import { db } from '../../firebaseConfig'
import {
	AddCourseType,
	DeleteCourseType,
	UserCoursesType,
} from '../lib/authTypes'
import { courseType, ExerciseType, WorkoutType } from './types'

export const getCourses = async (): Promise<courseType[]> => {
	let courses: courseType[] = []
	try {
		const dbRef = ref(db, 'courses') // ссылк на коллекцию "courses" в Firebase
		const snapshot = await get(dbRef)
		if (snapshot.exists()) {
			// для проверки, существуют ли данные
			courses = Object.values(snapshot.val()) // для получения значений данных
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
		}
	}
	return courses
}

export const getCoursesWithProgress = async (
	userId: string,
	courseId?: string,
): Promise<courseType[]> => {
	try {
		const courseData = courseId ? await getCourse(courseId) : null

		if (courseId && !courseData) return []

		const coursesData = courseId ? Array.of(courseData!) : await getCourses()

		const snapshot = await get(child(ref(db), `workouts`))

		if (snapshot.exists()) {
			const workoutsData = Object.values(snapshot.val()) as WorkoutType[]

			for (const course of coursesData) {
				const snapshot = await get(
					ref(db, `/users/${userId}/courses/${course._id}/workouts`),
				)
				const userData = snapshot.exists() ? snapshot.val() : {}

				course.progress = 0
				course.quantity = 0

				course.workoutsData = course.workouts.map(workoutId => {
					return workoutsData.find((workout: WorkoutType) => {
						if (workout._id === workoutId) {
							const userWorkout = userData[workout._id]

							//course.isAdded  = Boolean(userWorkout)

							if (workout.exercises) {
								if (userWorkout && userWorkout.exercises) {
									// each exercise

									workout.exercises.forEach((exercise, index) => {
										userWorkout.exercises.forEach(
											(userExercise: ExerciseType) => {
												if (index === userExercise.index)
													exercise.progress = userExercise.progress
											},
										)
									})

									// each workout inside current course

									const value = userWorkout.exercises.reduce(
										(acc: number, exercise: ExerciseType) =>
											acc + exercise.progress,
										0,
									)

									course.progress += value
									workout.progress = value
								} else {
									workout.progress = 0
								}

								const value = workout.exercises.reduce(
									(acc, exercise) => acc + exercise.quantity,
									0,
								)

								course.quantity += value
								workout.quantity = value
							} else {
								const userWorkout = userData[workout._id]

								if (userWorkout) {
									course.progress += userWorkout.progress
								}
							}

							return true
						}

						return false
					})
				}) as WorkoutType[]
			}
			return coursesData // Возвращаем данные тренировки
		} else {
			console.log('Workout not found')
			return []
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error fetching workout:', error.message)
		}
		return []
	}
}

// для получения данных о курсах из базы данных и возврата этих данных в виде массива объектов

export const getCourse = async (
	courseId: string,
): Promise<courseType | null> => {
	//Получает данные о конкретном курсе по его ID

	try {
		const snapshot = await get(child(ref(db), `courses/${courseId}`))

		if (snapshot.exists()) {
			return snapshot.val()
		}
	} catch (e) {
		console.error(e)
	}

	return null
}

// Получение коллекции курсов пользователя по uid
export const getUserCourses = async (
	userId: string | undefined,
): Promise<UserCoursesType[]> => {
	let data: UserCoursesType[] = []
	//ссылка на коллекцию курсов пользователей
	const userCoursesRef = ref(db, `users/${userId}/courses`)
	//запрос на сервер...
	try {
		//проверяем наличие данных по снимку(snapshot)
		const snapshot = await get(userCoursesRef)
		if (snapshot.exists()) {
			data = Object.values(snapshot.val())
		}
	} catch (error) {
		console.error(error)
	}
	//возвращаем результат
	return data
}

// Добавление курса пользователю
export const addCourseToUser = async ({ userId, courseId }: AddCourseType) => {
	//ссылка на коллекцию курсов пользователя
	const userCoursesRef = ref(db, `users/${userId}/courses/${courseId}`)
	//запрос на сервер...
	try {
		await set(userCoursesRef, {
			id: courseId,
			isCompleted: false,
			workouts: [courseId],
		})
	} catch (error) {
		console.error(error)
	}
}

// Удаление курса пользователя
export const deleteUserCourse = async ({
	userId,
	courseId,
}: DeleteCourseType) => {
	//ссылка на коллекцию курсов пользователя
	const userCoursesRef = ref(db, `users/${userId}/courses/${courseId}`)
	//запрос на сервер...
	try {
		await remove(userCoursesRef)
	} catch (error) {
		console.error(error)
	}
}

export const updateExercises = async (
	userId: string,
	courseId: string,
	workoutId: string,
	workoutProgress: number,
	exercises: ExerciseType[],
) => {
	if (workoutProgress) {
		const quantityRef = ref(
			db,
			`users/${userId}/courses/${courseId}/workouts/${workoutId}`,
		)
		await update(quantityRef, {
			_id: workoutId,
			progress: workoutProgress.progress,
		})
	} else {
		const quantityRef = ref(
			db,
			`users/${userId}/courses/${courseId}/workouts/${workoutId}`,
		)
		await update(quantityRef, {
			_id: workoutId,
			exercises: exercises.map((exercise, index) => ({
				index,
				progress: exercise.progress,
			})),
		})
	}
}

// Функция для получения данных конкретной тренировки
export const getWorkout = async (
	userId: string,
	courseId: string,
	workoutId: string,
): Promise<WorkoutType | null> => {
	try {
		// const courseData = await getCourse(courseId)

		const snapshot = await get(child(ref(db), `workouts/${workoutId}`))
		if (snapshot.exists()) {
			const data = snapshot.val()
			{
				const snapshot = await get(
					ref(db, `/users/${userId}/courses/${courseId}/workouts/${workoutId}`),
				)
				if (snapshot.exists()) {
					const userData = snapshot.val()

					data.progress = 0
					data.quantity = 0

					if (userData.exercises) {
						userData.exercises.forEach((exercise: ExerciseType) => {
							data.exercises[exercise.index].progress = exercise.progress
							data.progress += exercise.progress
						})
						data.exercises.forEach((exercise: ExerciseType) => {
							if (!exercise.progress) {
								exercise.progress = 0
							}

							data.progress = data.progress || 0
							data.quantity += exercise.quantity
						})
					} else {
						data.progress = userData.progress || 0
						data.quantity = 1
					}
				}
			}
			return data // Возвращаем данные тренировки
		} else {
			console.log('Workout not found')
			return null
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error fetching workout:', error.message)
		}
		return null
	}
}

export const getWorkouts = async (
	// workoutId: string,
	courseId: string,
	userId: string,
): Promise<WorkoutType[]> => {
	try {
		const courseData = await getCourse(courseId)

		const snapshot = await get(child(ref(db), `workouts`))

		if (courseData && snapshot.exists()) {
			const workoutsData = Object.values(snapshot.val()) as WorkoutType[]

			const courseWorkouts = courseData.workouts.map((workoutId: string) =>
				workoutsData.find((workout: WorkoutType) => workout._id === workoutId),
			) as WorkoutType[]

			{
				const snapshot = await get(
					ref(db, `/users/${userId}/courses/${courseId}/workouts`),
				)

				if (snapshot.exists()) {
					const userData = snapshot.val()

					for (const workout of courseWorkouts) {
						const userWorkout = userData[workout._id]

						if (userWorkout && userWorkout.exercises) {
							workout.progress = userWorkout.exercises.reduce(
								(acc: number, exercise: ExerciseType) =>
									acc + exercise.progress,
								0,
							)
						} else {
							workout.progress = 0
						}

						if (workout.exercises) {
							workout.quantity = workout.exercises.reduce(
								(acc, exercise) => acc + exercise.quantity,
								0,
							)
						} else {
							workout.quantity = 1
						}
					}
				}
			}
			// courseWorkouts[0].progress = 1000 // test
			return courseWorkouts // Возвращаем данные тренировки
		} else {
			console.log('Workout not found')
			return []
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error fetching workout:', error.message)
		}
		return []
	}
}
