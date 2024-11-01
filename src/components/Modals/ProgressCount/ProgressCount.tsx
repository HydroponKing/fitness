import { ChangeEvent, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, useParams } from 'react-router-dom'
import { auth } from '../../../../firebaseConfig'
import { updateExercises } from '../../../api/api'
import type { ExerciseType } from '../../../api/types'
import { useModal } from '../../../hooks/useModal'
import { AppRoutes } from '../../../lib/appRoutes'
import Button from '../../Button/Button'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import InfoMsg from '../InfoMsg/InfoMsg'
import WorkoutQuantityTimes from './WorkoutQuantityTimes/WorkoutQuantityTimes'

type Props = {
	exercises: ExerciseType[]
}

export default function ProgressCount({ exercises }: Props) {
	const { courseId, workoutId } = useParams()
	const navigate = useNavigate()
	const { dialogRef, openModal, closeModal } = useModal()
	const [user] = useAuthState(auth)
	const [exercisesData, setExercisesData] = useState<ExerciseType[]>(exercises)

	async function handleSaveProgress() {
		try {
			await updateExercises(user!.uid, courseId!, workoutId!, 0, exercisesData)
			openModal() // Открываем модальное окно при успешном сохранении
		} catch (error) {
			console.error('Ошибка при сохранении прогресса:', error)
		}
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
				{exercisesData.map((exercise, index) => {
					const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
						const newData = [...exercisesData]
						newData[index].progress = Number(e.target.value)
						setExercisesData(newData)
					}
					return (
						<WorkoutQuantityTimes
							key={index}
							exercise={exercise.name}
							progress={exercise.progress}
							quantity={exercise.quantity}
							handleInput={handleInput}
						/>
					)
				})}
			</div>

			<Button
				width='w-full'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				onClick={() => {
					handleSaveProgress()
					openModal()
					setTimeout(() => {
						navigate(AppRoutes.PROFILE)
					}, 1500)
				}}
				title='Сохранить'
			/>
			{/* Success save progress modal */}
			<ModalWrapper
				ref={dialogRef}
				onClick={() => {
					closeModal()
					navigate(AppRoutes.PROFILE)
				}}
			>
				<InfoMsg title='Ваш прогресс засчитан!' />
			</ModalWrapper>
		</div>
	)
}
