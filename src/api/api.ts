import { child, get, ref } from 'firebase/database'
import { db } from '../../firebaseConfig'
import { courseType, WorkoutType } from './types'

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
