import { User } from 'firebase/auth'
import { UseFormSetError } from 'react-hook-form'

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

// Типы для обновления пароля пользователя
export type ResetPassType = {
	oldPassword: string
	newPassword: string
	user: User
	setError: UseFormSetError<{
		oldPassword: string
		newPassword: string
	}>
	logout: () => void
}
