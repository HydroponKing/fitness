import { z } from 'zod'

export const signUpSchema = z
	.object({
		username: z
			.string()
			.min(3, {
				message: 'Имя пользователя должно содержать не менее 3 символов',
			})
			.trim(),
		email: z.string().email({ message: 'Некорректный email' }).trim(),
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

export type TSignUpSchema = z.infer<typeof signUpSchema>
