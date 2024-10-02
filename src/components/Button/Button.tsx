type Props = {
	width: string
	border?: string
	background?: string
	hover: string
	active: string
	media?: string
	onClick?: () => void
	title: string
}

export default function Button({
	width,
	border,
	background,
	hover,
	active,
	media,
	onClick,
	title,
}: Props) {
	return (
		<button
			className={`${width} ${border} ${background} h-[52px] text-[18px]  rounded-[46px] transition-colors ${hover} ${active} ${media}`}
			onClick={onClick}
		>
			{title}
		</button>
	)
}
