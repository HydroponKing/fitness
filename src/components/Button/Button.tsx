type Props = {
	width: string
	border?: string
	background?: string
	hover: string
	active: string
	media?: string
	onClick?: () => void
	title: string
	type?: string
	disabled?: boolean
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
	type,
	disabled,
}: Props) {
	return (
		<button
			type={type}
			className={`${width} ${border} ${background} h-[52px] text-[18px]  rounded-[46px] transition-colors ${hover} ${active} ${media} disabled:bg-[#F7F7F7] disabled:outline-gray`}
			onClick={onClick}
			disabled={disabled}
		>
			{title}
		</button>
	)
}
