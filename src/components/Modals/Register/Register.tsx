import Button from '../../Button/Button'

export default function Register() {
	return (
		<div className='fixed flex justify-center items-center top-0 left-0 bottom-0 w-[100%] z-50 right-0 bg-modal_active_bg'>
			<div className='bg-white w-[360px] rounded-[30px] flex flex-col items-center p-10'>
				<img
					className='w-[220px] h-[35px]'
					src='/src/assets/img/logo.png'
					alt='logo'
				/>
				<div className='flex flex-col items-center gap-[34px] mt-[48px]'>
					<div className='flex flex-col gap-[10px]'>
						<input
							className='w-[280px] h-[52px] border rounded-[8px] border-[#D0CECE] p-[16px]'
							type='email'
							name='email'
							placeholder='Эл. почта'
						/>
						<input
							className='w-[280px] h-[52px] border rounded-[8px] border-[#D0CECE] p-[16px]'
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						<input
							className='w-[280px] h-[52px] border rounded-[8px] border-[#D0CECE] p-[16px]'
							type='password'
							name='password'
							placeholder='Повторите пароль'
						/>
					</div>
					<div className='flex flex-col gap-[10px]'>
						<Button
							width='w-[280px]'
							background='bg-green_bg'
							hover='hover:bg-hover'
							active='active:bg-active active:text-white'
							title='Зарегистрироваться'
						/>

						<Button
							width='w-[280px]'
							background='transparent'
							border='border'
							hover='hover:bg-[#F7F7F7]'
							active='active:bg-[#E9ECED]'
							title='Войти'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
