import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../lib/appRoutes'
import WorkoutList from './WorkoutList/WorkoutList'
import Button from '../../Button/Button'

export default function SelectWorkout() {
	const navigate = useNavigate()

	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-[32px] font-medium leading-9'>Выберите тренировку</h2>

			<div
				className='mt-12 mb-[34px] h-[360px] pr-5
				overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-1.5
		    [&::-webkit-scrollbar]:bg-scroll [&::-webkit-scrollbar]:rounded-[10px]  
   	  [&::-webkit-scrollbar-thumb]:bg-scroll_thumb 
			  [&::-webkit-scrollbar-thumb]:rounded-[10px]
				mobile:mt-[34px]'
			>
				<WorkoutList />
				<WorkoutList />
				<WorkoutList />
				<WorkoutList />
				<WorkoutList />
				<WorkoutList />
				<WorkoutList />
				<WorkoutList />
			</div>

			<Button
				width='w-[380px]'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				media='mobile:w-full mobile:text-[16px]'
				onClick={() => navigate(AppRoutes.WORKOUT)}
				title='Начать'
			/>
		</div>
	)
}
