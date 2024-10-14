import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../../api/authApi'
import { AppRoutes } from '../../../lib/appRoutes'
import { signUpSchema, TSignUpSchema } from '../../../lib/validateSchemes'
import Button from '../../Button/Button'
import ErrorMsg from '../../ErrorMsg/ErrorMsg'

export default function Register() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) })

	const onSubmit = async (data: TSignUpSchema) => {
		await signUp({
			username: data.username,
			email: data.email,
			password: data.password,
			setError,
			navigate,
		})
	}

	return (
		<div className='flex flex-col items-center'>
			<img
				className='w-[220px] h-[35px]'
				src='/src/assets/img/logo.png'
				alt='logo'
			/>

			<div className='flex flex-col items-center mt-[48px]'>
				<form
					className='flex flex-col gap-[10px]'
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className={`w-[280px] h-[52px] p-4 border rounded-lg
							${errors.username ? 'border-error' : 'border-placeholder'}`}
						{...register('username')}
						type='text'
						placeholder='Имя пользователя'
					/>
					{/* username input error message */}
					{errors.username && <ErrorMsg error={errors.username.message} />}
					<input
						className={`w-[280px] h-[52px] p-4 border rounded-lg
							${errors.email ? 'border-error' : 'border-placeholder'}`}
						{...register('email')}
						type='email'
						placeholder='Эл. почта'
					/>
					{/* email input error message */}
					{errors.email && <ErrorMsg error={errors.email.message} />}
					<input
						className={`w-[280px] h-[52px] p-4 border rounded-lg
							${errors.password ? 'border-error' : 'border-placeholder'}`}
						{...register('password')}
						type='password'
						placeholder='Пароль'
						autoComplete='off'
					/>
					{/* password input error message */}
					{errors.password && <ErrorMsg error={errors.password.message} />}
					<input
						className={`w-[280px] h-[52px] p-4 border rounded-lg
						${errors.confirmPassword ? 'border-error' : 'border-placeholder'}`}
						{...register('confirmPassword')}
						type='password'
						placeholder='Повторите пароль'
						autoComplete='off'
					/>
					{/* confirm input  password error message */}
					{errors.confirmPassword && (
						<ErrorMsg error={errors.confirmPassword.message} />
					)}

					<div className='flex flex-col gap-[10px] mt-[34px]'>
						<Button
							width='w-[280px]'
							background='bg-green_bg'
							hover='hover:bg-hover'
							active='active:bg-active active:text-white'
							inactive='disabled:bg-gray_bg disabled:border-0'
							disabled={isSubmitting}
							title='Зарегистрироваться'
						/>
						<Button
							width='w-[280px]'
							background='transparent'
							border='border'
							hover='hover:bg-gray_bg'
							active='active:bg-[#E9ECED]'
							inactive='disabled:bg-transparent disabled:border-gray'
							onClick={() => navigate(AppRoutes.LOGIN)}
							disabled={isSubmitting}
							title='Войти'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
