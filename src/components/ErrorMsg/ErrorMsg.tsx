type Props = {
	error: string | undefined
}

export default function ErrorMsg({ error }: Props) {
	return (
		<>
			<p className='text-center text-error max-w-[280px] leading-4'>{error}</p>
		</>
	)
}
