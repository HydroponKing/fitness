import { useForm } from 'react-hook-form'
import Button from '../../Button/Button'
import { signUpSchema, TSignUpSchema } from '../../../lib/validateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../../lib/appRoutes'
import { useUpdateProfile } from 'react-firebase-hooks/auth'
import { signUp } from '../../../api/userApi'
import { auth } from '../../../../firebaseConfig'

export default function Register() {
	const [updateProfile] = useUpdateProfile(auth)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) })

	const onSubmit = async (data: TSignUpSchema) => {
		console.log(data)
		await signUp({
			username: data.username,
			email: data.email,
			password: data.password,
		})
			.then(() => updateProfile({ displayName: data.username }))
			.catch(error => {
				console.error(error.message)
				setError('email', {
					type: 'server',
					message: 'Данная почта уже используется. Попробуйте войти.',
				})
			})
	}

	return (
		<div className='flex flex-col items-center'>
			<img
				className='w-[220px] h-[35px]'
				src='/src/assets/img/logo.png'
				alt='logo'
			/>
			<div className='flex flex-col items-center gap-[34px] mt-[48px]'>
				<div className='flex flex-col gap-[10px]'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							{...register('username')}
							className={`w-[280px] h-[52px] border rounded-[8px] border-[#D0CECE] p-[16px] ${errors.username && 'border-error'}`}
							type='text'
							placeholder='Имя пользователя'
						/>
						{errors.username && (
							<p className='text-error'>{errors.username.message}</p>
						)}

						<input
							{...register('email')}
							className={`w-[280px] h-[52px] border rounded-[8px] border-[#D0CECE] p-[16px] ${errors.email && 'border-error'}`}
							type='email'
							placeholder='Эл. почта'
						/>
						{errors.email && (
							<p className='text-error'>{errors.email.message}</p>
						)}

						<input
							{...register('password')}
							className={`w-[280px] h-[52px] border rounded-[8px] border-[#D0CECE] p-[16px] ${errors.password && 'border-error'}`}
							type='password'
							placeholder='Пароль'
						/>
						{errors.password && (
							<p className='text-error'>{errors.password.message}</p>
						)}

						<input
							{...register('confirmPassword')}
							className={`w-[280px] h-[52px] border rounded-[8px] border-[#D0CECE] p-[16px] ${errors.confirmPassword && 'border-error'}`}
							type='password'
							placeholder='Повторите пароль'
						/>
						{errors.confirmPassword && (
							<p className='text-error'>{errors.confirmPassword.message}</p>
						)}
						<div className='flex flex-col gap-[10px]'>
							<Button
								width='w-[280px]'
								background='bg-green_bg'
								border='border-red-500'
								hover='hover:bg-hover'
								active='active:bg-active active:text-white'
								disabled={isSubmitting}
								title='Зарегистрироваться'
							/>
							<Link to={AppRoutes.LOGIN}>
								<Button
									type='button'
									width='w-[280px]'
									background='transparent'
									border='border'
									hover='hover:bg-[#F7F7F7]'
									active='active:bg-[#E9ECED]'
									title='Войти'
								/>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
