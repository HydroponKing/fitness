import { useModal } from '../../hooks/useModal'
import Header from '../Header/Header'
import YoutubePlayer from './YoutubePlayer/YoutubePlayer'
import Progress from '../Progress/Progress'
import Button from '../Button/Button'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import ProgressCount from '../Modals/ProgressCount/ProgressCount'

export default function CourseWorkout() {
	const { dialogRef, openModal, closeModal } = useModal()

	return (
		<div>
			<Header />

			<div
				className='mt-[50px] flex flex-col gap-6
				mobile:mt-10 mobile:gap-2.5'
			>
				<h1
					className='text-6xl font-medium
					mobile:text-[24px] mobile:leading-[26px]'
				>
					Йога
				</h1>

				{/* Breadcrumbs */}
				<ol
					className='flex text-[32px] leading-9
			    [&_.line-b]:border-b [&_.line-b]:mobile:border-0
					[&>:not(:last-child)]:after:content-["_/"]
					[&>:not(:last-child)]:after:pr-1
					mobile:flex-wrap mobile:text-[18px] mobile:leading-5'
				>
					<li>
						<span className='line-b'>Красота и здоровье</span>
					</li>
					<li>
						<span className='line-b'>Йога на каждый день</span>
					</li>
					<li>
						<span className='line-b'>2 день</span>
					</li>
				</ol>
			</div>

			{/* Video player */}
			<div className='my-10 mobile:my-6'>
				<YoutubePlayer videoUrl='https://www.youtube.com/embed/oqe98Dxivns' />
			</div>

			<div
				className='bg-white mb-[201px] p-10 rounded-[30px]
				shadow-shadow_primary mobile:mb-[84px] mobile:p-[30px]'
			>
				<h3 className='text-[32px] leading-9 font-medium'>
					Упражнения тренировки 2
				</h3>

				<div
					className='flex flex-wrap justify-between gap-y-5 mt-5 mb-10
				  mobile:flex-col mobile:flex-nowrap mobile:gap-6'
				>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
					<Progress
						width='w-[320px]'
						mobile='mobile:w-full'
						percentValue='50'
						value='50'
						title='Наклоны вперед'
					/>
				</div>

				<Button
					width='w-[320px]'
					background='bg-green_bg'
					hover='hover:bg-hover'
					active='active:bg-active active:text-white'
					media='mobile:w-full'
					onClick={openModal}
					title='Заполнить свой прогресс'
				/>
				{/* Progress count modal */}
				<ModalWrapper ref={dialogRef} onClick={closeModal}>
					<ProgressCount />
				</ModalWrapper>
			</div>
		</div>
	)
}
