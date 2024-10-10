import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import { getCourses } from '../../api/courseApi'
import { courseType } from '../../api/types'
import ScrollBtn from '../Button/ScrollBtn'


export default function Main() {
	const [courses, setCourses] = useState<courseType[]>([])// для получения курсов с бека
	useEffect(() => {
		const getData = async () => {
			const res = await getCourses()
			setCourses(res)
		}
		getData()
	}, [])
	console.log(courses);
	const sortedCourses = [...courses].sort((a, b) => a.order - b.order)// для сортировки курсов по порядку

	return (
		<main>
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
					<CourseItem course={course} key={course._id} />
				))}
			</div>

			<ScrollBtn
				margin='mt-[34px] mb-[81px]'
				mobile='mobile:mt-[24px] mobile:mb-[29px] mobile:items-end'
			/>
		</main>
	)
	
}