import Course from '../Course/Course'
import Header from '../Header/Header'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import { getCourses } from '../../api/courseApi'
import { courseType } from '../../api/types'


export default function Main() {
	const [courses, setCourses] = useState<courseType[]>([])// для получения курсов с бека
	useEffect(()=>{
		const getData = async() =>{
			const res = await getCourses()
			setCourses(res)
		}
		getData()
	},[])
	console.log(courses);
	const sortedCourses = [...courses].sort((a, b) => a.order - b.order)// для сортировки курсов по порядку
	
	return (
		<main>
			<Header />
			<div className="bg-gray-[100] grid place-content-center">
				<div className=" max-w-[1440px] mt-5">
					<div className="flex justify-between my-[50px] relative">
						<div className="text-[60px] h-[120px] mw-[850px] leading-1 inline-block align-middle font-bold text-wrap"> Начните заниматься спортом и улучшите качество жизни</div>
						<div className="pl-5 mt-4  text-[32px] min-w-[288px] max-h-[102px] rounded-md bg-[#BCEC30]">Измени своё <br/> тело за полгода!</div>
						<div className="absolute top-[106px] right-[150px]">
							<img src="/src/assets/img/polygon.png" alt="polygon" />
						</div>

					</div>
					<div className="grid-cols-1 sm:grid md:grid-cols-3 -mr-[10] gap-[10]">
					{sortedCourses.map((course) => (
							<Course course={course} key={course._id} />
						))}
					</div>
					<div className="flex justify-center ">
					<Button
					width='w-[127px]'
					background='bg-green_bg'
					hover='hover:bg-hover'
					active='active:bg-active active:text-white'					
					title='Наверх ↑'
				/>
					</div>
				</div>
			</div>
		</main>
	)
}