import Header from '../Header/Header'
import manImage from '/src/assets/img/man.png'
import IconStar from '/src/assets/img/icon/star.svg'
import lineImage from '/src/assets/img/line.png'
import { getCourses } from '../../api/api'
import { courseType } from '../../api/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CoursePage() {
	const { id } = useParams() // Получаем id курса из URL
	const [course, setCourse] = useState<courseType | null>(null) // Состояние для хранения данных курса

	useEffect(() => {
		const fetchCourse = async () => {
			try {
				const courses = await getCourses() // Получаем все курсы с сервера
				const selectedCourse = courses.find(course => course._id === id) // Ищем курс по id
				setCourse(selectedCourse || null) // Устанавливаем состояние
			} catch (error) {
				console.error('Ошибка получения данных о курсе:', error)
			}
		}

		fetchCourse() // Вызываем функцию для получения данных
	}, [id]) // Добавляем id в зависимости, чтобы вызывать этот эффект при изменении id

	if (!course) {
		return <div>Загрузка...</div> // Показать "Загрузка", пока данные не будут получены
	}

	return (
		<div className='font-Roboto max-w-[1200px] mx-auto'>
			{/* Header */}
			<Header />

			{/* Yoga блок */}
			<div className='relative mt-8 overflow-hidden rounded-[30px] h-[389px] md:h-[310px]'>
				<div>
					<img src={course.srcBig} alt='Йога' className='hidden md:block' />
					<img
						src={course.src}
						alt='Йога'
						className='block md:hidden rounded-[35px] object-cover lg:-translate-y-[35%] lg:object-[150px] -translate-y-[13%]'
					/>
				</div>
			</div>

			{/* Подойдет для вас блок */}
			<div className='py-10'>
				<h2 className='md:text-[40px] text-[24px] font-semibold leading-[44px] text-left mb-6'>
					Подойдет для вас, если:
				</h2>

				<div className='md:flex flex-cool justify-center gap-[30px]'>
					{/* Первый блок */}

					<div className='flex items-center bg-black_bg p-[20px] rounded-[28px] h-[141px] md:w-[368px] md:mb-0 mb-[17px]'>
						<div className='text-[75px] font-bold text-number mr-4 pr-[10px]'>
							1
						</div>
						<p className='text-white md:text-[24px] text-[18px]'>
							{course.fitting[0]}
						</p>
					</div>

					{/* Второй блок */}
					<div className='flex items-center bg-black_bg p-[20px] rounded-[28px] h-[141px] md:w-[431px] md:mb-0 mb-[17px]'>
						<div className='text-[75px] font-bold text-number mr-4 pr-[10px]'>
							2
						</div>
						<p className='text-white md:text-[24px] text-[18px]'>
							{course.fitting[1]}
						</p>
					</div>

					{/* Третий блок */}
					<div className='flex items-center bg-black_bg p-[20px] rounded-[28px] h-[141px] md:w-[327px] md:mb-0 mb-[17px]'>
						<div className='text-[75px] font-bold text-number mr-4 pr-[10px]'>
							3
						</div>
						<p className='text-white md:text-[24px] text-[18px]'>
							{course.fitting[2]}
						</p>
					</div>
				</div>
			</div>

			{/* Направления */}
			<div className='py-8 relative'>
				<h2 className='md:text-[40px] text-[24px] font-semibold leading-[44px] text-left mb-6'>
					Направления
				</h2>
				<div className='bg-green_bg rounded-[20px] p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
					{course.directions &&
						course.directions.slice(0, 6).map((direction, index) => (
							<a
								key={index}
								href='#'
								className='flex items-center text-black md:text-[24px] text-[18px] font-normal leading-[26.4px] px-4 py-2 rounded-full bg-green_bg'
							>
								<img src={IconStar} alt='star icon' className='mr-2' />
								{direction}
							</a>
						))}
				</div>
			</div>

			<img
				src={manImage}
				alt='Man'
				className='w-[420px] block md:hidden mx-auto mt-4 translate-x-[80px] translate-y-[-170px] z-[0] absolute scale-90'
			/>

			{/* Призыв к действию */}

			<div className='relative py-10 md:w-[1200px] w-[343px]  md:h-[300px] h-[377px] mt-[90px] md:mt-[102px]'>
				<div className='container mx-auto flex justify-between items-center bg-white shadow-2xl rounded-[20px] h-[490px]'>
					<div className='md:ml-[40px] ml-[16px]'>
						<h2 className='md:text-[60px] text-[32px] font-medium md:leading-[60px] leading-[40px] text-left text-black md:w-[420px] w-[220px]'>
							Начните путь к новому телу
						</h2>
						<ul className='mt-4 space-y-2 bg-gray-200 p-4 rounded list-disc list-inside'>
							<li className='md:text-[24px] text-[18px] font-normal leading-[26.4px] text-left text-gray'>
								Пророботка всех групп мышц
							</li>
							<li className='md:text-[24px] text-[18px] font-normal leading-[26.4px] text-left text-gray'>
								Тренировка суставов
							</li>
							<li className='md:text-[24px] text-[18px] font-normal leading-[26.4px] text-left text-gray'>
								Улучшение циркуляции крови
							</li>
							<li className='md:text-[24px] text-[18px] font-normal leading-[26.4px] text-left text-gray'>
								Упражнения заряжают бодростью
							</li>
							<li className='md:text-[24px] text-[18px] font-normal leading-[26.4px] text-left text-gray'>
								Помогают противостоять стрессам
							</li>
						</ul>

						<button className='mt-6 bg-regular hover:bg-hover active:bg-active text-black py-3 px-6 rounded-full md:w-[437px] w-[280px]'>
							Добавить курс
						</button>
					</div>

					{/* Контейнер для изображения мужчины и линии */}
					<div className='relative hidden md:block'>
						<img
							src={lineImage}
							alt='Line'
							className='absolute top-0 left-[-50px] z-0 translate-x-[0px] translate-y-[130px] scale-[1.27]'
						/>
						<img
							src={manImage}
							alt='Man'
							className='relative w-[500px] md:h-auto translate-x-[-40px] translate-y-[-70px]'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
