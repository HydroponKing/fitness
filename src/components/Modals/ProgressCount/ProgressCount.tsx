import { useModal } from '../../../hooks/useModal'
import WorkoutQuantityTimes from './WorkoutQuantityTimes/WorkoutQuantityTimes'
import Button from '../../Button/Button'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import ProgressAccepted from '../ProgressAccepted/ProgressAccepted'
import { ChangeEvent, useEffect, useState } from 'react'
import type { ExerciseType } from '../../../api/types'

import { getWorkout, updateValue } from '../../../api/api';

export default function ProgressCount() {
	const { dialogRef, openModal, closeModal } = useModal();
	const [value, setValue] = useState<ExerciseType[]>([]);

	const [workoutData, setWorkoutData] = useState(null) // Состояние для хранения данных тренировки
	//const [selectedWorkouts, setSelectedWorkouts] = useState({}) // Состояние для выбранных тренировок

	// Функция загрузки данных тренировки при монтировании компонента
	useEffect(() => {
		async function fetchWorkout() {
			const data = await getWorkout('3yvozj', '5ZRgci39ceW6xc43eaxT0tDIKHv1', 'ab1c3f') // Загружаем тренировку с ID "3yvozj"
			setWorkoutData(data) // Сохраняем данные тренировки в состояние
			//setSelectedWorkouts((prev) => ({ ...prev, [data._id]: false })) // Добавляем тренировку в состояние выбранных
			setValue([...data.exercises])
		}
		fetchWorkout()
	}, [])

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		setValue({ ...value, [e.target.name]: e.target.value });
	}

	async function handleSaveProgress() {
		const userId = "5ZRgci39ceW6xc43eaxT0tDIKHv1"; // Укажите реальный ID пользователя
		const courseId = "вашCourseID"; // Укажите реальный ID курса
		const workoutId = "3yvozj"; // Укажите реальный ID тренировки

		try {
			await updateValue(userId, courseId, workoutId, value.question1);
			openModal(); // Открываем модальное окно при успешном сохранении
		} catch (error) {
			console.error('Ошибка при сохранении прогресса:', error);
		}
	}

	function handleInput (e: ChangeEvent<HTMLInputElement>) {
		// setValue({...value, [e.target.name]:e.target.value})
		setValue((prev) => {
			prev[0].progress = Number(e.target.value) || 0
			return [...prev]
		})
	}
	return (
		<div>
			<h3 className='text-[32px] font-medium leading-9'>Мой прогресс</h3>

			<div
				className='flex flex-col gap-5 mt-12 mb-[34px] pr-5 h-[346px]
				overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-1.5
		    [&::-webkit-scrollbar]:bg-scroll [&::-webkit-scrollbar]:rounded-[10px]  
   	  [&::-webkit-scrollbar-thumb]:bg-scroll_thumb 
			  [&::-webkit-scrollbar-thumb]:rounded-[10px]
				mobile:mt-[34px]'
			>
				{
					value.map((exercise, index) => (
						<WorkoutQuantityTimes key={index} exercise='Сколько раз вы сделали наклоны вперед?' name={'question1'} value={exercise.progress || 0} hadleInput={handleInput}/>
					))
				}
				
				{/* <WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' /> */}
			</div>

			<Button
				width='w-full'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				onClick={openModal}
				title='Сохранить'
			/>
			{/* Success save progress modal */}
			<ModalWrapper ref={dialogRef} onClick={closeModal}>
				<ProgressAccepted />
			</ModalWrapper>
		</div>
	)
}
