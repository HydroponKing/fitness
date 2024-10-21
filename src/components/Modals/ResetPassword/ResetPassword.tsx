import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { auth } from '../../../../firebaseConfig'
import { resetPassword } from '../../../api/auth'
import {
	resetPasswordSchema,
	TResetPasswordSchema,
} from '../../../lib/validateSchemes'
import Button from '../../Button/Button'
import ErrorMsg from '../../ErrorMsg/ErrorMsg'

type Props = {
	logout: () => void
}

export default function ResetPassword({ logout }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<TResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
	})

	const [user] = useAuthState(auth)

	const onSubmit = async (data: TResetPasswordSchema) => {
		await resetPassword({
			oldPassword: data.oldPassword,
			newPassword: data.newPassword,
			user: user!,
			setError,
			logout,
		})
	}

	return (
		<div className='flex flex-col items-center'>
			<img
				className='w-[220px] h-[35px]'
				src='/src/assets/img/logo.png'
				alt='logo'
			/>

			<form
				className='flex flex-col gap-[10px] mt-12 mb-[34px]'
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					className={`w-[280px] h-[52px] p-4 border rounded-lg
						${errors.oldPassword ? 'border-error' : 'border-placeholder'}`}
					{...register('oldPassword')}
					type='password'
					placeholder='Текущий пароль'
					autoComplete='off'
				/>
				{/* old password input error message */}
				{errors.oldPassword && <ErrorMsg error={errors.oldPassword.message} />}
				<input
					className={`w-[280px] h-[52px] p-4 border rounded-lg
						${errors.newPassword ? 'border-error' : 'border-placeholder'}`}
					{...register('newPassword')}
					type='password'
					placeholder='Новый пароль'
					autoComplete='off'
				/>
				{/* new password input error message */}
				{errors.newPassword && <ErrorMsg error={errors.newPassword.message} />}

				<Button
					width='w-full'
					background='bg-green_bg'
					hover='hover:bg-hover'
					active='active:bg-active active:text-white'
					inactive='disabled:bg-transparent disabled:border-gray'
					disabled={isSubmitting}
					title='Подтвердить'
				/>
			</form>
		</div>
	)
}
