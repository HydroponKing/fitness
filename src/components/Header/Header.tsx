import Button from '../Button/Button'

export default function Header() {
	return (
		<header className='flex justify-between items-center mt-[50px]'>
			<div>
				<img src='/src/assets/img/logo.png' />
				<p className='text-gray mt-[14px]'>
					Онлайн-тренировки для занятий дома
				</p>
			</div>
			<Button background='bg-green_bg' width='w-[103px]' title='Войти' />
		</header>
	)
}
