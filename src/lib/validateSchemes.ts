import { z } from 'zod'

export const signUpSchema = z
	.object({
		username: z
			.string()
			.min(3, {
				message: 'Имя пользователя должно содержать не менее 3 символов',
			})
			.trim(),
		email: z.string().email({ message: 'Некорректный Email' }).trim(),
		password: z
			.string()
			.min(6, { message: 'Пароль должен быть не менее 6 символов' })
			.trim(),
		confirmPassword: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' }),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export const signInSchema = z.object({
	login: z.string().min(1, { message: 'Введите логин' }).trim(),
	password: z.string().min(1, { message: 'Введите пароль' }).trim(),
})

export type TSignUpSchema = z.infer<typeof signUpSchema>
export type TSignInSchema = z.infer<typeof signInSchema>
