import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useModal } from '../../../hooks/useModal'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebaseConfig'
import { getUserCoursesData } from '../../../store/features/userSlice'
import CourseCard from './CourseCard'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import SelectWorkout from '../../Modals/SelectWorkout/SelectWorkout'
import ScrollBtn from '../../Button/ScrollBtn'

export default function UserCourses() {
	const dispatch = useAppDispatch()
	const { dialogRef, openModal, closeModal } = useModal()
	const { courses, userCourses } = useAppSelector(state => state.user)
	const [user] = useAuthState(auth)

	console.log(courses)
	console.log(userCourses)

	useEffect(() => {
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
				{userCourses.map(course => (
					<CourseCard
						key={course.id}
						course={course}
						user={user!}
						openModal={openModal}
					/>
				))}
			</div>
			{/* Select workout modal */}
			<ModalWrapper
				ref={dialogRef}
				onClick={closeModal}
				media='mobile:p-[30px]'
			>
				<SelectWorkout />
			</ModalWrapper>

			<ScrollBtn
				margin='mt-[34px] mb-[81px]'
				mobile='mobile:mt-6 mobile:mb-10 mobile:items-end'
			/>
		</div>
	)
}
