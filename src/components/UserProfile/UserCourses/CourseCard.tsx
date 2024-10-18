import Button from '../../Button/Button'
import Progress from '../../Progress/Progress'

type Props = {
	openModal: () => void
}

export default function CourseCard({ openModal }: Props) {
	return (
		<div
			className='relative flex flex-col gap-[24px] w-[360px]
			rounded-[30px] bg-white shadow-shadow_primary
			mobile:flex-col mobile:items-center mobile:w-[343px]'
		>
			<div className='h-[325px] overflow-hidden rounded-[30px]'>
				<img
					className='h-[175%] rounded-[30px] object-cover object-yoga'
					src='/src/assets/img/yoga.jpg'
					alt='yoga'
				/>
			</div>
			{/* Delete user course button */}
			<svg
				className='absolute w-[27px] h-[27px]
				top-[20px] right-[20px] cursor-pointer'
			>
				<use xlinkHref='/src/assets/img/icon/sprite.svg#delete_course_circle' />
			</svg>

			<div
				className='flex flex-col gap-[20px] px-[30px]
				pb-[15px] mobile:px-[22px]'
			>
				<h2
					className='text-[32px] font-medium leading-[35px]
					mobile:text-[24px] mobile:leading-[26px]'
				>
					Йога
				</h2>

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
						className='flex gap-[6px] items-center bg-gray_bg 
						p-[10px] rounded-[50px]'
					>
						<svg className='w-[18px] h-[18px]'>
							<use xlinkHref='/src/assets/img/icon/sprite.svg#time' />
						</svg>
						<p>20-50 мин/день</p>
					</div>

					<div
						className='flex gap-[6px] items-center bg-gray_bg 
						p-[10px] rounded-[50px]'
					>
						<svg className='w-[18px] h-[18px]'>
							<use xlinkHref='/src/assets/img/icon/sprite.svg#difficulty_signal' />
						</svg>
						<p>Сложность</p>
					</div>
				</div>

				<div className='mb-[20px]'>
					<p className='text-[18px] leading-5'>Прогресс 50%</p>
					<Progress value='50' />
				</div>

				<Button
					width='w-[300px]'
					background='bg-green_bg'
					hover='hover:bg-hover'
					active='active:bg-active active:text-white'
					media='mobile:text-[16px]'
					onClick={openModal}
					title='Продолжить'
				/>
			</div>
		</div>
	)
}
