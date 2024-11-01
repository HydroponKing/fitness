import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import { auth } from '../../../firebaseConfig'
import {
	getCoursesWithProgress,
	getWorkout,
	updateExercises,
} from '../../api/api'
import { courseType, WorkoutType } from '../../api/types'
import { useModal } from '../../hooks/useModal'
import { getPercent } from '../../utils/math'
import Button from '../Button/Button'
import Header from '../Header/Header'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import ProgressCount from '../Modals/ProgressCount/ProgressCount'
import Progress from '../Progress/Progress'
import YoutubePlayer from './YoutubePlayer/YoutubePlayer'
import { AppRoutes } from '../../lib/appRoutes'

export default function CourseWorkout() {
	const { courseId, workoutId } = useParams()
	const [courseData, setCourseData] = useState<courseType | null>(null)
	const [workoutData, setWorkoutData] = useState<WorkoutType | null>(null)
	const [user] = useAuthState(auth)
	const [dayIndex, setDayIndex] = useState(0)
	const { dialogRef, openModal, closeModal } = useModal()

	console.log('test course')

	useEffect(() => {
		if (user && user.uid && courseId && workoutId) {
			Promise.all([
				getCoursesWithProgress(courseId),
				getWorkout(user.uid, courseId, workoutId),
			])
				.then(([coursesData, workoutData]) => {
					// Проверка, если данные курса вернулись как массив
					if (Array.isArray(coursesData) && coursesData.length > 0) {
						const courseData = coursesData.find(
							course => course._id === courseId,
						) // Предполагаем, что это нужный курс

						if (!courseData) return

						setCourseData(courseData)
						setWorkoutData(workoutData)
						setDayIndex((courseData.workouts.indexOf(workoutId || '') || 0) + 1)
					}
				})
				.catch(error => console.error(error))
		}
	}, [user, user?.uid, courseId, workoutId])

	return (
		<div>
			<Header />

			<div
				className='mt-[50px] flex flex-col gap-6
				mobile:mt-10 mobile:gap-2.5'
			>
				<h1
					className='text-6xl font-medium
					mobile:text-[24px] mobile:leading-[26px]'
				>
					{courseData?.nameRU}
				</h1>

				{/* Breadcrumbs */}
				<ol
					className='flex text-[32px] leading-9
			    [&_.line-b]:border-b [&_.line-b]:mobile:border-0
					[&>:not(:last-child)]:after:content-["_/"]
					[&>:not(:last-child)]:after:pr-1
					mobile:flex-wrap mobile:text-[18px] mobile:leading-5'
				>
					<li>
						<span className='line-b'>Красота и здоровье</span>
					</li>
					<li>
						<span className='line-b'>{courseData?.nameRU} на каждый день</span>
					</li>
					<li>
						<span className='line-b'>{dayIndex} день</span>
					</li>
				</ol>
				{
					<p
						className='flex text-[32px] leading-9
					[&_.line-b]:border-b [&_.line-b]:mobile:border-0
						[&>:not(:last-child)]:after:content-["_/"]
						[&>:not(:last-child)]:after:pr-1
						mobile:flex-wrap mobile:text-[18px] mobile:leading-5'
					>
						{workoutData?.name}
					</p>
				}
			</div>

			{/* Video player */}
			<div className='my-10 mobile:my-6'>
				{workoutData && workoutData.video ? (
					<YoutubePlayer videoUrl={workoutData?.video} />
				) : null}
			</div>

			<div
				className='bg-white mb-[201px] p-10 rounded-[30px]
				shadow-shadow_primary mobile:mb-[84px] mobile:p-[30px]'
			>
				<h3 className='text-[32px] leading-9 font-medium'>
					Упражнения тренировки {dayIndex}
				</h3>

				<div
					className='flex flex-wrap justify-between gap-y-5 mt-5 mb-10
				  mobile:flex-col mobile:flex-nowrap mobile:gap-6'
				>
					{workoutData &&
						(workoutData.exercises ? (
							workoutData.exercises.map((exersice, index) => (
								<Progress
									key={index}
									width='w-[320px]'
									mobile='mobile:w-full'
									percent={getPercent(exersice.progress, exersice.quantity)}
									title={exersice.name}
								/>
							))
						) : (
							<Progress
								width='w-[320px]'
								mobile='mobile:w-full'
								percent={getPercent(workoutData.progress, workoutData.quantity)}
								title={'Текущий день'}
							/>
						))}
				</div>

				<Button
					width='w-[320px]'
					background='bg-green_bg'
					hover='hover:bg-hover'
					active='active:bg-active active:text-white'
					media='mobile:w-full'
					onClick={async () => {
						if (workoutData?.exercises) {
							openModal()
						} else {
							await updateExercises(user!.uid, courseId!, workoutId!, 1, [])
							setTimeout(() => {
								navigate(AppRoutes.PROFILE)
							}, 1500)
						}
					}}
					title={
						workoutData?.exercises
							? 'Заполнить свой прогресс'
							: 'Завершить тренировку'
					}
				/>
				{/* Progress count modal */}
				<ModalWrapper ref={dialogRef} onClick={closeModal}>
					{workoutData && workoutData.exercises && (
						<ProgressCount exercises={[...workoutData.exercises]} />
					)}
				</ModalWrapper>
			</div>
		</div>
	)
}
