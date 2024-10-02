import Button from '../Button/Button'

export default function Header() {
	return (
		<header className='flex justify-between items-center mt-[50px]'>
			<div>
				<img src='/src/assets/img/logo.png' />
				<p className='text-gray mt-[14px] max-[375px]:hidden'>
					Онлайн-тренировки для занятий дома
				</p>
			</div>
			<Button
				width='w-[103px]'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				title='Войти'
			/>
		</header>
	)
}
