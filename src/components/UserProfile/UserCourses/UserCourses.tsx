import { useEffect, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebaseConfig'
import { getCoursesWithProgress } from '../../../api/api'
import { courseType } from '../../../api/types'
import { useModal } from '../../../hooks/useModal'
import { getUserCoursesData } from '../../../store/features/userSlice'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import ScrollBtn from '../../Button/ScrollBtn'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import SelectWorkout from '../../Modals/SelectWorkout/SelectWorkout'
import CourseCard from './CourseCard'

export default function UserCourses() {
	const dispatch = useAppDispatch()
	// const { courceWorkouts } = useAppSelector((state) => state.user)
	const { dialogRef, openModal, closeModal } = useModal()
	const { userCourses } = useAppSelector(state => state.user)
	const [coursesData, setCoursesData] = useState<courseType[]>([])
	const [selectedCourseId, setSelectedCourseId] = useState('')
	// const [workouts, setWorkouts] = useState<Record<string, WorkoutType[]>>({})
	const [user] = useAuthState(auth)

	// Фильтр всех курсов и получение нового массива курсов пользователя
	const userFilteredCourses = useMemo(
		() =>
			//coursesData.filter((course) => course.isAdded)
			coursesData.filter(course => {
				return userCourses.some(userCourse => course._id === userCourse.id)
			}),
		[coursesData, userCourses],
	)

	useEffect(() => {
		if (user && user.uid) {
			getCoursesWithProgress(user!.uid)
				.then(coursesData => {
					if (!coursesData || !coursesData.length) return

					setCoursesData(coursesData)
				})
				.catch(error => console.error(error))
		}
	}, [user, user?.uid])

	// useEffect(() => {
	// 	if (!coursesData || ! coursesData.length)
	// 		dispatch(getCoursesData())
	// }, [courcoursesDatases])

	// useEffect(() => {
	// 	if (courses && courses.length) {
	// 		Promise.all(courses.map((course) => getWorkouts(course._id)))
	// 			.then((dataArray) => {
	// 				const result = {...workouts}
	// 				dataArray.forEach((workouts) => {
	// 					result[workouts[0].courseId] = workouts
	// 				})
	// 				setWorkouts(result)
	// 				console.log(result);

	// 			})
	// 			.catch()
	// 	}
	// }, [courses])

	useEffect(() => {
		//получаем коллекцию пользователя и сохраняем в Redux
		dispatch(getUserCoursesData(user?.uid))
	}, [dispatch, user?.uid])

	return (
		<div>
			<h2
				className='mt-[60px] text-[40px] font-semibold leading-[44px] 
				mobile:mt-6 mobile:text-2xl mobile:font-medium 
				mobile:leading-[26px]'
			>
				Мои курсы
			</h2>

			<div
				className='flex flex-wrap gap-11 mt-10
				mobile:flex-col mobile:items-center mobile:gap-6 mobile:mt-6'
			>
				{userFilteredCourses.map(course => (
					<CourseCard
						key={course._id}
						course={course}
						user={user!}
						openModal={() => {
							setSelectedCourseId(course._id)
							openModal()
						}}
					/>
				))}
			</div>
			{/* Select workout modal */}
			<ModalWrapper
				ref={dialogRef}
				onClick={() => {
					setSelectedCourseId('')
					closeModal()
				}}
				media='mobile:p-[30px]'
			>
				<SelectWorkout courseId={selectedCourseId} />
			</ModalWrapper>

			<ScrollBtn
				margin='mt-[34px] mb-[81px]'
				mobile='mobile:mt-6 mobile:mb-10 mobile:items-end'
			/>
		</div>
	)
}
