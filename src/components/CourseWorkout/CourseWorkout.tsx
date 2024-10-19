import { useRef } from 'react'
import { useModal } from '../../hooks/useModal'
import Header from '../Header/Header'
import Progress from '../Progress/Progress'
import Button from '../Button/Button'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import ProgressCount from '../Modals/ProgressCount/ProgressCount'

export default function CourseWorkout() {
	const { dialogRef, openModal, closeModal } = useModal()
	const videoRef = useRef<HTMLVideoElement>(null)

	// const videoHandler = (control: string) => {
	// 	if (videoRef.current)
	// 		if (control === 'play') {
	// 			videoRef.current.play()
	// 		} else if (control === 'pause') {
	// 			videoRef.current.pause()
	// 		}
	// 	console.log('clicked')
	// }

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
				<h3
					className='text-[32px] leading-9
					mobile:text-[18px] mobile:leading-5'
				>
					Красота и здоровье / Йога на каждый день / 2 день
				</h3>
			</div>

			<div className='my-10 mobile:my-6'>
				<video
					className='rounded-[30px]'
					ref={videoRef}
					width={1168}
					height={639}
					controls
					autoPlay
					// muted
					// loop
					// playsInline
				>
					Sorry, your browser doesn't support videos.
				</video>
			</div>

			<div
				className='bg-white mb-[201px] p-10 rounded-[30px]
				mobile:mb-[84px] mobile:p-[30px]'
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
					media='mobile:w-full mobile:text-[16px]'
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
