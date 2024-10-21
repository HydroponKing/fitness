import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../lib/appRoutes'
import Button from '../Button/Button'

export default function NotFoundError() {
	const navigate = useNavigate()

	return (
		<div className='h-screen flex items-center'>
			<img src='/src/assets/img/404.png' alt='error' />

			<div
				className='fixed flex gap-3.5 flex-col justify-end
				items-center inset-0 pb-16'
			>
				<div className='text-center'>
					<h1 className='text-5xl font-medium'>
						Ууупс! Такой страницы не существует...
					</h1>

					<p className='text-xl'>
						Мы сожалеем, но страница, на которую Вы пытались перейти, не
						найдена.
					</p>

					<Button
						width='w-[200px]'
						background='bg-green_bg'
						hover='hover:bg-hover'
						active='active:bg-active active:text-white'
						onClick={() => navigate(AppRoutes.MAIN)}
						title='На главную'
					/>
				</div>
			</div>
		</div>
	)
}
