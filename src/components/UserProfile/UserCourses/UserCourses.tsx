import { useModal } from '../../../hooks/useModal'
import CourseCard from './CourseCard'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import SelectWorkout from '../../Modals/SelectWorkout/SelectWorkout'
import ScrollBtn from '../../Button/ScrollBtn'

export default function UserCourses() {
	const { dialogRef, openModal, closeModal } = useModal()

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
				<CourseCard openModal={openModal} />
				{/* <CourseCard />
				<CourseCard />
				<CourseCard /> */}
			</div>
			{/* Select workout modal */}
			<ModalWrapper ref={dialogRef} onClick={closeModal} media='mobile:px-8'>
				<SelectWorkout />
			</ModalWrapper>

			<ScrollBtn
				margin='mt-[34px] mb-[81px]'
				mobile='mobile:mt-6 mobile:mb-10 mobile:items-end'
			/>
		</div>
	)
}
