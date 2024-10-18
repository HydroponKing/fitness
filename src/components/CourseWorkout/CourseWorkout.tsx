import { useRef } from 'react'
import Header from '../Header/Header'

export default function CourseWorkout() {
	const videoRef = useRef<HTMLVideoElement>(null)

	const videoHandler = (control: string) => {
		if (videoRef.current)
			if (control === 'play') {
				videoRef.current.play()
			} else if (control === 'pause') {
				videoRef.current.pause()
			}
		console.log('clicked')
	}

	return (
		<div>
			<Header />

			<div className='mt-[50px] flex flex-col gap-6'>
				<h1 className='text-6xl font-medium'>Йога</h1>
				<h3 className='text-[32px] leading-9'>
					Красота и здоровье / Йога на каждый день / 2 день
				</h3>
			</div>

			<div className='my-10'>
				<video
					className='rounded-[30px]'
					ref={videoRef}
					src=''
					width={1168}
					height={639}
					controls
				>
					Sorry, your browser doesn't support videos.
				</video>
			</div>

			<img
				src='/src/assets/img/icon/star.svg'
				onClick={() => videoHandler('play')}
			/>
		</div>
	)
}
