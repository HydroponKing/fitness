import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebaseConfig'
import { getWorkouts } from '../../../api/api'
import type { WorkoutType } from '../../../api/types'
import WorkoutList from './WorkoutList/WorkoutList'
import Button from '../../Button/Button'

type Props = {
	courseId: string
}

export default function SelectWorkout({ courseId }: Props) {
	const navigate = useNavigate()
	const [user] = useAuthState(auth)
	const [workoutsData, setWorkoutsData] = useState<WorkoutType[]>([]) // Состояние для хранения данных тренировки

	useEffect(() => {
		if (courseId) {
			getWorkouts(courseId, user!.uid)
				.then(workoutsData => {
					setWorkoutsData(workoutsData)
					console.log(workoutsData)
				})
				.catch(error => console.error(error))
		}
	}, [courseId, user, user?.uid])

	if (!courseId) {
		if (workoutsData && workoutsData.length) setWorkoutsData([])
		return null
	}

	// Проверяем, есть ли данные тренировки, перед тем как отобразить страницу
	if (!workoutsData || !workoutsData.length) {
		return <p>Загрузка...</p> // Показать сообщение о загрузке
	}

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
				{workoutsData.map(workout => (
					<WorkoutList
						key={workout._id}
						quality={workout.progress >= workout.quantity}
						// quality={selectedWorkouts[workoutData._id]} // Получаем статус выбранной тренировки из состояния
						inputName={workout._id} // Устанавливаем ID тренировки в качестве имени инпута
						title={workout.name} // Используем загруженное название тренировки
						subtitle={workout.subtitle} // Используем загруженный подзаголовок
						workoutLink={`/courses/${courseId}/workouts/${workout._id}`}
					/>
				))}
			</div>

			<Button
				width='w-[380px]'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				media='mobile:w-full mobile:text-[16px]'
				onClick={() => {
					for (const workout of workoutsData) {
						if (workout.progress < workout.quantity) {
							return navigate(`/courses/${courseId}/workouts/${workout._id}`)
						}
					}
				}}
				title='Начать'
			/>
		</div>
	)
}
