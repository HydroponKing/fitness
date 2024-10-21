import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../../api/auth'
import { AppRoutes } from '../../../lib/appRoutes'
import { signInSchema, TSignInSchema } from '../../../lib/validateSchemes'
import Button from '../../Button/Button'
import ErrorMsg from '../../ErrorMsg/ErrorMsg'

export default function Login() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) })

	const onSubmit = async (data: TSignInSchema) => {
		await signIn({
			login: data.login,
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
							${errors.login ? 'border-error' : 'border-placeholder'}`}
						{...register('login')}
						type='email'
						placeholder='Логин'
					/>
					{/* login input error message */}
					{errors.login && <ErrorMsg error={errors.login.message} />}
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

					<div className='flex flex-col gap-[10px] mt-[34px]'>
						<Button
							width='w-[280px]'
							background='bg-green_bg'
							hover='hover:bg-hover'
							active='active:bg-active active:text-white'
							inactive='disabled:bg-transparent disabled:border-gray'
							disabled={isSubmitting}
							title='Войти'
						/>
						<Button
							width='w-[280px]'
							background='transparent'
							border='border'
							hover='hover:bg-gray_bg'
							active='active:bg-[#E9ECED]'
							inactive='disabled:bg-gray_bg disabled:border-0'
							onClick={() => navigate(AppRoutes.REGISTER)}
							disabled={isSubmitting}
							title='Зарегистрироваться'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
