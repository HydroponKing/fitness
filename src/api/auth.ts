import {
	EmailAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	reauthenticateWithCredential,
	updatePassword,
	updateProfile,
} from 'firebase/auth'
import { auth, db } from '../../firebaseConfig'
import { ref, set } from 'firebase/database'
import { SignUpType, SignInType, ResetPassType } from '../lib/authTypes'
import { AppRoutes } from '../lib/appRoutes'

// Регистрация пользователя
export const signUp = async ({
	username,
	email,
	password,
	setError,
	navigate,
}: SignUpType) => {
	try {
		await createUserWithEmailAndPassword(auth, email, password).then(
			({ user }) => {
				//set user in 'users' database collection
				set(ref(db, 'users/' + user.uid), {
					username,
					email,
					password,
				})
				//add username to auth firebase state
				updateProfile(user, { displayName: username })
			},
		)
		//navigate user to login page
		navigate(AppRoutes.LOGIN)
		//user info message
		alert('Пользователь успешно зарегистрирован!')
	} catch (error) {
		console.error(error)
		//set error message from api to react-hook-form state
		setError('email', {
			type: 'server',
			message: 'Данная почта уже используется. Попробуйте войти.',
		})
	}
}

// Авторизация пользователя
export const signIn = async ({
	login,
	password,
	setError,
	navigate,
}: SignInType) => {
	try {
		await signInWithEmailAndPassword(auth, login, password)
		//navigate user to main page
		navigate(AppRoutes.MAIN)
	} catch (error) {
		console.error(error)
		//set error message from api to react-hook-form state
		setError('password', {
			type: 'server',
			message: 'Пароль введен неверно, попробуйте еще раз.',
		})
	}
}

// Обновление пароля пользователя
export const resetPassword = async ({
	user,
	oldPassword,
	newPassword,
	logout,
	setError,
}: ResetPassType) => {
	try {
		// Check old password
		const credential = EmailAuthProvider.credential(
			user.email as string,
			oldPassword,
		)
		// Reauthenticate user
		await reauthenticateWithCredential(user, credential)
		// Update password
		await updatePassword(user, newPassword)
		//signout and navigate user to main page
		logout()
		//user info message
		alert('Пароль успешно изменен!')
	} catch (error) {
		console.error(error)
		//set error message from api to react-hook-form state
		setError('oldPassword', {
			type: 'server',
			message: 'Текущий пароль неверный',
		})
	}
}
