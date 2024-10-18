import { courseType } from '../../api/types'

export type CourseOneType = {
	course: courseType
}
export default function CourseItem({ course }: CourseOneType) {
	const { nameRU, srcSmall } = course

	return (
		<>
			<div
				className='relative flex flex-col gap-[24px] w-[360px]
			rounded-[30px] bg-white shadow-shadow_primary
			mobile:flex-col mobile:items-center mobile:w-[343px]'
			>
				<div>
					<img className='rounded-[30px]' src={srcSmall} />
					<svg
						className='w-[27px] h-[27px] 
						absolute top-[20px] right-[20px] cursor-pointer'
					>
						<use
							xlinkHref='/src/assets/img/icon/
						sprite.svg#add_course_circle'
						/>
					</svg>
				</div>

				<div
					className='flex flex-col gap-[20px] px-[30px] pb-[15px]
					mobile:px-[22px]'
				>
					<h6
						className='text-[32px] font-medium leading-[35px]
						mobile:text-[24px] mobile:leading-[26px]'
					>
						{nameRU}
					</h6>

					<div className='flex flex-wrap gap-[6px]'>
						<div
							className='flex gap-[6px] items-center	
						bg-gray_bg p-[10px] rounded-[50px]'
						>
							<svg className='w-[18px] h-[18px]'>
								<use xlinkHref='/src/assets/img/icon/sprite.svg#calendar' />
							</svg>
							<p>25 дней</p>
						</div>

						<div
							className='flex gap-[6px] items-center	
						bg-gray_bg p-[10px] rounded-[50px]'
						>
							<svg className='w-[18px] h-[18px]'>
								<use xlinkHref='/src/assets/img/icon/sprite.svg#time' />
							</svg>
							<p>20-50 мин/день</p>
						</div>

						<div
							className='flex gap-[6px] items-center	
						bg-gray_bg p-[10px] rounded-[50px]'
						>
							<svg className='w-[18px] h-[18px]'>
								<use
									xlinkHref='/src/assets/img/icon/
								sprite.svg#difficulty_signal'
								/>
							</svg>
							<p>Сложность</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
