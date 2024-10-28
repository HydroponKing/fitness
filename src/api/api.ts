import { child, get, ref, update } from 'firebase/database'
import { db } from '../../firebaseConfig'
import { courseType, WorkoutType } from './types'
import { shallowEqual } from 'react-redux'

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

export const updateValue = async (
	userId: string,
	courseId: string,
	workoutId: string,
	quantity: string,
) => {
	const quantityRef = ref(
		db,
		`users/${userId}/courses/${courseId}/workouts/${workoutId}`,
	)
	await update(quantityRef, { quantity })
}

/*
import { updateQuantity } from '../../api/api';

const updateQuantityInDatabase = async (newQuantity) => {
  try {
    await updateQuantity(userId, courseId, workoutId, newQuantity);
  } catch (error) {
    console.error('Ошибка при обновлении quantity:', error);
  }
};
*/

// Функция для получения данных конкретной тренировки
export const getWorkout = async (
	workoutId: string,
	userId: string,
	courseId: string,
): Promise<WorkoutType | null> => {
	try {
		const snapshot = await get(child(ref(db), `workouts/${workoutId}`))
		if (snapshot.exists()) {
			const data = snapshot.val()
			{
				const snapshot = await get(
					ref(db,
					`/users/${userId}/courses/${courseId}/workouts/${workoutId}`,
				))
				if (snapshot.exists()) {
					const userData = snapshot.val()
					userData.exercises.forEach(exercise => {
						data.exercises[exercise.index].progress = exercise.progress
					})
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

async function getData(path: string) {
	const snapshot = await get(ref(db, path))

	if (snapshot.exists())
		return snapshot.val()
	else
		return "hren'"
}
