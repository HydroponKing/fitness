type Props = {
	width: string
	border?: string
	background?: string
	hover: string
	active: string
	inactive?: string
	media?: string
	title: string
	onClick?: () => void
	disabled?: boolean
}

export default function Button({
	width,
	border,
	background,
	hover,
	active,
	inactive,
	media,
	title,
	onClick,
	disabled,
}: Props) {
	return (
		<button
			className={`h-[52px] text-[18px] rounded-[46px] transition-colors disabled:text-gray
				${width} ${border} ${background} 
				${hover} ${active} ${inactive} 
				${media}`}
			onClick={onClick}
			disabled={disabled}
		>
			{title}
		</button>
	)
}
