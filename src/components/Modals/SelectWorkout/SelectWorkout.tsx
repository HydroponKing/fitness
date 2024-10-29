import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../lib/appRoutes'
import WorkoutList from './WorkoutList/WorkoutList'
import Button from '../../Button/Button'
import { useEffect, useState } from 'react'
import { getWorkout } from '../../../api/api' // импортируем функцию для получения данных тренировки

export default function SelectWorkout() {
	const navigate = useNavigate()
	const [workoutData, setWorkoutData] = useState(null) // Состояние для хранения данных тренировки
	const [selectedWorkouts, setSelectedWorkouts] = useState({}) // Состояние для выбранных тренировок
	// Функция загрузки данных тренировки при монтировании компонента
	useEffect(() => {
		async function fetchWorkout() {
			const data = await getWorkout('3yvozj', '5ZRgci39ceW6xc43eaxT0tDIKHv1', 'ab1c3f') // Загружаем тренировку с ID "3yvozj"
			setWorkoutData(data) // Сохраняем данные тренировки в состояние
			setSelectedWorkouts((prev) => ({ ...prev, [data._id]: false })) // Добавляем тренировку в состояние выбранных
		}
		fetchWorkout()
	}, [])
	// Обработчик нажатия на тренировку
	function handleInput(e) {
		const workoutId = e.target.name
		setSelectedWorkouts((prev) => {
			const updatedWorkouts = {
				...prev,
				[workoutId]: !prev[workoutId], // Инвертируем значение выбранной тренировки
			}
			console.log("Выбранные тренировки:", updatedWorkouts) // Лог текущего состояния выбранных тренировок
			return updatedWorkouts
		})
	}

	// Функция для фильтрации только выбранных тренировок
	function getSelectedWorkouts() {
		// Преобразуем объект в массив и фильтруем только элементы с true
		return Object.entries(selectedWorkouts)
			.filter(([, isSelected]) => isSelected) // Отбираем только те, что имеют значение true
			.map(([workoutId]) => workoutId) // Получаем только ID выбранных тренировок
	}
	// Проверяем, есть ли данные тренировки, перед тем как отобразить страницу
	if (!workoutData) {
		return <p>Загрузка...</p> // Показать сообщение о загрузке
	}

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-[32px] font-medium leading-9">Выберите тренировку</h2>

			<div
				className="mt-12 mb-[34px] h-[360px] pr-5
				overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-1.5
				[&::-webkit-scrollbar]:bg-scroll [&::-webkit-scrollbar]:rounded-[10px]  
				[&::-webkit-scrollbar-thumb]:bg-scroll_thumb 
				[&::-webkit-scrollbar-thumb]:rounded-[10px]
				mobile:mt-[34px]"
			>
				{/* Передаем нужные пропсы в WorkoutList */}
				<WorkoutList
					handleInput={handleInput}
					quality={selectedWorkouts[workoutData._id]} // Получаем статус выбранной тренировки из состояния
					inputName={workoutData._id} // Устанавливаем ID тренировки в качестве имени инпута
					title={workoutData.name} // Используем загруженное название тренировки
					subtitle={workoutData.subtitle} // Используем загруженный подзаголовок
				/>
			</div>

			<Button
				width="w-[380px]"
				background="bg-green_bg"
				hover="hover:bg-hover"
				active="active:bg-active active:text-white"
				media="mobile:w-full mobile:text-[16px]"
				onClick={() => {
					const selectedWorkoutsList = getSelectedWorkouts() // Получаем отфильтрованный список
					console.log("Список выбранных тренировок:", selectedWorkoutsList) // Выводим выбранные тренировки в консоль
					navigate(`/courses/${"ab1c3f"}/workouts/${workoutData._id}`) // !!!
					// navigate(`/courses/${courseId}/workouts/${workoutData._id}`)
				}}
				title="Начать"
			/>
		</div>
	)
}
