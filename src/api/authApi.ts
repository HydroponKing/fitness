import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../../firebaseConfig'
import { ref, set } from 'firebase/database'
import { SignUpType } from './types'
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
				//set user in 'users' collection when registering
				set(ref(db, 'users/' + user.uid), {
					username,
					email,
					password,
				})
				//add username when registering
				updateProfile(user, { displayName: username })
				//navigate user to login page when success request
				navigate(AppRoutes.LOGIN)
			},
		)
	} catch (error) {
		console.error(error)
		//set error message from api to signup email input
		setError('email', {
			type: 'server',
			message: 'Данная почта уже используется. Попробуйте войти.',
		})
	}
}
