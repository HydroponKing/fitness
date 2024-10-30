export type courseType = {
	_id: string
	nameRU: string
	src: string
	srcBig: string
	srcSmall: string
	duration: string
	description: string
	directions: string[]
	fitting: string[]
	timeaday: string
	level: string
	order: number
	workouts: string[]
}
// Типы для запросов, ключи курсов

export type WorkoutType = {
	name: string
	_id: string
	courseNameRu: string
	exercises: ExerciseType[]
	video: string
}

export type ProgressWorkoutType = {
	name: string
	progress: number
	_id: string
}

export interface ExerciseType {
	name: string
	_id: string
	progress: number
	quantity: number
}
