import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { AppRoutes } from '../../lib/appRoutes'

export default function NotFound() {
	return (
		<div className='h-screen flex items-center'>
			<img src='/src/assets/img/404.png' alt='error' />
			<div className='fixed flex gap-3.5 flex-col justify-end items-center inset-0 pb-16'>
				<div className='text-center'>
							<h1 className='text-5xl font-medium'>
								Ууупс! Такой страницы не существует...
							</h1>
							<p className='text-xl'>
								Мы сожалеем, но страница, на которую Вы пытались перейти, не
								найдена.
							</p>
							<Link to={AppRoutes.MAIN}>
								<Button
									width='w-[200px]'
									background='bg-green_bg'
									hover='hover:bg-hover'
									active='active:bg-active active:text-white'
									media='mobile:text-[16px]'
									title='На главную'
								></Button>
							</Link>
						</div>
					</div>
				</div>
	)
}
