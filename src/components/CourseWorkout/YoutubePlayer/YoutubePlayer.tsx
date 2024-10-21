type Props = {
	videoUrl: string
}

export default function YoutubePlayer({ videoUrl }: Props) {
	return (
		<iframe
			className='w-full h-[639px] rounded-[30px] 
			mobile:h-[189px] mobile:rounded-[9px]'
			src={videoUrl}
			allow='accelerometer; autoplay; 
			clipboard-write; encrypted-media; 
			gyroscope; picture-in-picture'
			allowFullScreen
			loading='lazy'
			title='Workouts'
		>
			Sorry, your browser doesn't support videos.
		</iframe>
	)
}
