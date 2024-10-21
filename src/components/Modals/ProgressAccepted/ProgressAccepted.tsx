export default function ProgressAccepted() {
	return (
		<div className='flex flex-col items-center gap-[34px] max-w-[346px]'>
			<h2
				className='text-[40px] text-center leading-[48px]
				font-medium mobile:text-[32px] mobile:leading-9'
			>
				Ваш прогресс засчитан!
			</h2>
			<svg className='w-[68px] h-[68px]'>
				<use xlinkHref='/src/assets/img/icon/sprite.svg#check_success' />
			</svg>
		</div>
	)
}
