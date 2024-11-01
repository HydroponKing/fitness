type Props = {
	title: string
}

export default function InfoMsg({ title }: Props) {
	return (
		<div className='flex flex-col items-center gap-[34px] max-w-[346px]'>
			<h2
				className='text-[40px] text-center leading-[48px]
				font-medium mobile:text-[32px] mobile:leading-9'
			>
				{title}
			</h2>
			<svg className='w-[68px] h-[68px]'>
				<use xlinkHref='/img/icon/sprite.svg#check_success' />
			</svg>
		</div>
	)
}
