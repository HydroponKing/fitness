import { useEffect, useMemo, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebaseConfig'
import { getCoursesWithProgress } from '../../../api/api'
import { courseType } from '../../../api/types'
import { useModal } from '../../../hooks/useModal'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { getUserCoursesData } from '../../../store/slices/courseSlice'
import ScrollBtn from '../../Button/ScrollBtn'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import SelectWorkout from '../../Modals/SelectWorkout/SelectWorkout'
import CourseCard from './CourseCard'

export default function UserCourses() {
	const dispatch = useAppDispatch()
	const { dialogRef, openModal, closeModal } = useModal()
	const { userCourses, isLoading } = useAppSelector(state => state.course)
	const [coursesData, setCoursesData] = useState<courseType[]>([])
	const [selectedCourseId, setSelectedCourseId] = useState('')
	const [user] = useAuthState(auth)

	// Фильтр всех курсов и получение нового массива курсов пользователя
	const userFilteredCourses = useMemo(
		() =>
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

	useEffect(() => {
		//получаем коллекцию пользователя и сохраняем в Redux
		dispatch(getUserCoursesData(user?.uid))
	}, [dispatch, user?.uid])

	const handleSelectCourseId = (courseId: string) => {
		setSelectedCourseId(courseId)
		openModal()
	}

	const handleClearSelectCourseId = () => {
		setSelectedCourseId('')
		closeModal()
	}

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
				{/* Set loading msg, empty user courses msg and map user courses */}
				{isLoading ? (
					<p className='text-lg'>Загрузка...</p>
				) : !userFilteredCourses.length ? (
					<p className='text-lg'>Добавьте курс, чтобы начать тренировки</p>
				) : (
					userFilteredCourses.map(course => (
						<CourseCard
							key={course._id}
							user={user!}
							course={course}
							selectCourseId={() => handleSelectCourseId(course._id)}
						/>
					))
				)}
			</div>
			{/* Select workout modal */}
			<ModalWrapper
				ref={dialogRef}
				onClick={handleClearSelectCourseId}
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
