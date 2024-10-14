import { UseFormSetError } from 'react-hook-form'

export type courseType = {
	_id: string
	nameRU: string
	src: string
	srcSmall: string
	duration: string
	description: string
	directions: string[]
	fitting: string[]
	timeaday: string
	level: string
	order: number
}
// Типы для запросов, ключи курсов

export type WorkoutType = {
	name: string
	_id: string
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

// Типы для регистрации пользователя
export type SignUpType = {
	username: string
	email: string
	password: string
	setError: UseFormSetError<{
		email: string
	}>
	navigate: (url: string) => void
}

// Типы для авторизации пользователя
export type SignInType = {
	login: string
	password: string
	setError: UseFormSetError<{
		login: string
		password: string
	}>
	navigate: (url: string) => void
}
