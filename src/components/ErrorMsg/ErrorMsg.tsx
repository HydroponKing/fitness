export default function ErrorMsg({
	error,
	className,
}: {
	error: string
	className: string
}) {
	return (
		<div>
			<p className={className}>{error}</p>
		</div>
	)
}
