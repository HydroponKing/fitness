import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../lib/appRoutes'
import Button from '../../Button/Button'

export default function SelectWorkout() {
	const navigate = useNavigate()

	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-[32px] leading-9 mb-12'>Выберите тренировку</h1>
			<select className='mb-[34px]'>
				<option>Workout1</option>
				<option>Workout2</option>
				<option>Workout3</option>
				<option>Workout4</option>
				<option>Workout5</option>
			</select>
			<Button
				width='w-[380px]'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				media='mobile:text-[16px]'
				onClick={() => navigate(AppRoutes.WORKOUT)}
				title='Начать'
			/>
		</div>
	)
}
