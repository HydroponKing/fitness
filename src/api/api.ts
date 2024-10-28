import { child, get, ref, remove, set } from 'firebase/database'
import { db } from '../../firebaseConfig'
import { courseType, WorkoutType } from './types'
import {
	AddCourseType,
	DeleteCourseType,
	UserCoursesType,
} from '../lib/authTypes'

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
// для получения данных о курсах из базы данных и возврата этих данных в виде массива объектов

export const getCourse = async (courseId: string) => {
	//Получает данные о конкретном курсе по его ID

	try {
		const snapshot = await get(child(ref(db), `courses/${courseId}`))

		if (snapshot.exists()) {
			return snapshot.val()
		}
	} catch (e) {
		console.error(e)
	}
}

export const getUserWorkouts = async (userId: string, courseId: string) => {
	try {
		const workoutIdsSnapshot = await get(
			child(ref(db), `courses/${courseId}/workouts`),
		)

		if (workoutIdsSnapshot.exists()) {
			const workoutIds = workoutIdsSnapshot.val()
			let workouts = []

			for (let id of workoutIds) {
				const workoutDataSnapshot = await get(
					child(ref(db), `workouts/${id}/name`),
				)

				if (workoutDataSnapshot.exists()) {
					const progressSnapshot = await get(
						child(ref(db), `users/${userId}/${courseId}/${id}/done`),
					)

					if (progressSnapshot.exists()) {
						workouts.push({
							name: workoutDataSnapshot.val(),

							id,
							progress: progressSnapshot.val(),
						})
					}
				}
			}

			return workouts // Возвращаем готовый массив тренировок
		}

		return [] // Возвращаем пустой массив, если workoutIds не существует
	} catch (e) {
		console.error(e)
		return [] // Возвращаем пустой массив в случае ошибки
	}
}

export const getVideo = async (workoutId: string) => {
	// для подучения "воркаутов с видео" в Firebase
	let result: WorkoutType | null = null

	try {
		const snapshot = await get(child(ref(db), `workouts/${workoutId}`))

		if (snapshot.exists()) {
			result = snapshot.val()
		}
	} catch (e) {
		console.error(e)
	}

	return result?.video
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
export const addCourseToUser = async ({
	auth,
	userId,
	courseId,
}: AddCourseType) => {
	//проверяем авторизацию пользователя
	if (!auth) {
		alert('Добавить курс, могут только авторизованные пользователи')
		return
	}

	//ссылка на коллекцию курсов пользователя
	const userCoursesRef = ref(db, `users/${userId}/courses/${courseId}`)
	//получаем данные курсов пользователя с сервера
	const userCoursesData = await getUserCourses(userId)

	//проверяем, есть ли курс у пользователя
	const alreadyAdded = userCoursesData?.some(course => course.id === courseId)
	if (alreadyAdded) {
		alert('Данный курс уже приобретен')
		return
	}

	//запрос на сервер...
	try {
		await set(userCoursesRef, {
			id: courseId,
			isCompleted: false,
			workouts: [courseId],
		})
		alert('Курс успешно добавлен')
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
		alert('Курс успешно удален')
	} catch (error) {
		console.error(error)
	}
}
