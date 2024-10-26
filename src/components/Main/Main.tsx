import { Outlet, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../store/store'
import { getCoursesData } from '../../store/features/userSlice'
import { getCourses } from '../../api/api'
import { courseType } from '../../api/types'
import Header from '../Header/Header'
import CourseItem from './CourseItem/CourseItem'
import ScrollBtn from '../Button/ScrollBtn'

export default function Main() {
	const dispatch = useAppDispatch()
	//для получения курсов с бека
	const [courses, setCourses] = useState<courseType[]>([])

	useEffect(() => {
		//сохраняем данные курсов в Redux
		dispatch(getCoursesData())

		const getData = async () => {
			const res = await getCourses()
			setCourses(res)
		}
		getData()
	}, [dispatch])

	console.log(courses)
	//для сортировки курсов по порядку
	const sortedCourses = [...courses].sort((a, b) => a.order - b.order)

	return (
		<main>
			<Outlet />
			<Header />
			<div
				className='flex mt-[60px] mb-[50px]
				mobile:mt-10 mobile:mb-[34px]'
			>
				<div>
					<h1
						className='text-[60px] font-medium leading-[60px]
						mobile:text-[32px] mobile:leading-[35px]'
					>
						Начните заниматься спортом и улучшите качество жизни
					</h1>
				</div>

				<div
					className='relative bg-green_bg min-w-[288px] max-h-[102px]  
					px-5 py-4 rounded-[5px] mobile:hidden'
				>
					<h2 className='text-[32px] leading-[35px]'>
						Измени своё тело за полгода!
					</h2>
					<img
						className='absolute top-[85%] left-[41%]'
						src='/src/assets/img/polygon.png'
						alt='polygon'
					/>
				</div>
			</div>

			<div
				className='flex flex-wrap gap-11
				mobile:flex-col mobile:items-center mobile:gap-6'
			>
				{sortedCourses.map(course => (
					<Link to={`/coursepage/${course._id}`} key={course._id}>
						<CourseItem course={course} key={course._id} />
					</Link>
				))}
			</div>

			<ScrollBtn
				margin='mt-[34px] mb-[81px]'
				mobile='mobile:mt-[24px] mobile:mb-[29px] mobile:items-end'
			/>
		</main>
	)
}
