import Button from '../../Button/Button'

export default function Login() {
	return (
		<div className='flex flex-col items-center'>
			<img
				className='w-[220px] h-[35px]'
				src='/src/assets/img/logo.png'
				alt='logo'
			/>
			<div className='flex flex-col items-center gap-[34px] mt-[48px]'>
				<div className='flex flex-col gap-[10px]'>
					<input
						className='w-[280px] h-[52px] border rounded-[8px] 
						border-[#D0CECE] p-[16px]'
						type='text'
						name='login'
						placeholder='Логин'
					/>
					<input
						className='w-[280px] h-[52px] border rounded-[8px] 
						border-[#D0CECE] p-[16px]'
						type='password'
						name='password'
						placeholder='Пароль'
					/>
				</div>
				<div className='flex flex-col gap-[10px]'>
					<Button
						width='w-[280px]'
						background='bg-green_bg'
						hover='hover:bg-hover'
						active='active:bg-active active:text-white'
						title='Войти'
					/>

					<Button
						width='w-[280px]'
						background='transparent'
						border='border'
						hover='hover:bg-[#F7F7F7]'
						active='active:bg-[#E9ECED]'
						title='Зарегистрироваться'
					/>
				</div>
			</div>
		</div>
	)
}
