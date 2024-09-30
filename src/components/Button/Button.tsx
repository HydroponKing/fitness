type Props = {
	background: string
	width: string
	title: string
}

export default function Button({ background, width, title }: Props) {
	return (
		<button
			className={`${background} ${width} h-[52px] rounded-[46px] transition-colors hover:bg-hover active:bg-active active:text-white`}
		>
			{title}
		</button>
	)
}
