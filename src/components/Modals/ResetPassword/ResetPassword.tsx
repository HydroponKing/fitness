import { ChangeEvent, useState } from 'react'
import Button from '../../Button/Button'

export default function ResetPassword() {
	const [resetPassData, setResetPassData] = useState({
		newPassword: '',
		repeatPassword: '',
	})

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setResetPassData({ ...resetPassData, [name]: value })
	}

	return (
		<div className='flex flex-col items-center'>
			<img className='w-[220px] h-[35px]' src='/src/assets/img/logo.png' />

			<form className='flex flex-col gap-[10px] mt-12 mb-[34px]' action='#'>
				<input
					className='w-[280px] h-[52px] p-4 border 
					border-placeholder rounded-lg'
					type='password'
					name='newPassword'
					placeholder='Новый пароль'
					value={resetPassData.newPassword}
					onChange={onChange}
					required
					autoComplete='off'
				/>
				<input
					className='w-[280px] h-[52px] p-4 border 
					border-placeholder rounded-lg'
					type='password'
					name='repeatPassword'
					placeholder='Повторите пароль'
					value={resetPassData.repeatPassword}
					onChange={onChange}
					required
					autoComplete='off'
				/>
			</form>

			<Button
				width='w-full'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				title='Подтвердить'
			/>
		</div>
	)
}
