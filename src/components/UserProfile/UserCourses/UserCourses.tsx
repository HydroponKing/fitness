import ScrollBtn from '../../Button/ScrollBtn'
import CourseCard from './CourseCard'

export default function UserCourses() {
	return (
		<div>
			<h2
				className='mt-[60px] text-[40px] font-semibold leading-[44px] 
				mobile:mt-[24px] mobile:text-[24px] mobile:font-medium 
				mobile:leading-[26px]'
			>
				Мои курсы
			</h2>

			<div
				className='flex flex-wrap gap-10 mt-10
				mobile:flex-col mobile:items-center mobile:gap-6 mobile:mt-6'
			>
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>

			<ScrollBtn
				margin='mt-[34px] mb-[81px]'
				mobile='mobile:mt-6 mobile:mb-10 mobile:items-end'
			/>
		</div>
	)
}
