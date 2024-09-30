type Props = {
	width: string
	border?: string
	background: string
	hover: string
	active: string
	title: string
}

export default function Button({
	width,
	border,
	background,
	hover,
	active,
	title,
}: Props) {
	return (
		<button
			className={`${width} ${border} ${background} h-[52px] rounded-[46px]
			transition-colors hover:${hover} active:${active}`}
		>
			{title}
		</button>
	)
}
