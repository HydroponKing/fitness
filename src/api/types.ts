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
	// useful data to be closer
	workoutsData: WorkoutType[]
	// user data
	progress: number
	quantity: number
}
// Типы для запросов, ключи курсов

export type WorkoutType = {
	subtitle: string
	name: string
	_id: string
	courseNameRu: string
	exercises: ExerciseType[]
	video: string
	// user data
	progress: number
	quantity: number
}

export type ProgressWorkoutType = {
	name: string
	progress: number
	_id: string
}

export interface ExerciseType {
	index: number
	name: string
	progress: number
	quantity: number
}
export interface WorkoutListProps {
	quality: number;
	inputName: string;
	title: string;
	subtitle: string;
	workoutLink: string;
}