import { forwardRef, ReactNode } from 'react'

type Props = {
	children: ReactNode
	onClick: () => void
	media?: string
}

export default forwardRef<HTMLDialogElement, Props>(function ModalWrapper(
	{ onClick, children, media },
	ref,
) {
	return (
		<dialog
			className='rounded-[30px] transition-opacity backdrop:bg-modal'
			ref={ref}
			onClick={onClick}
		>
			<div
				className={`bg-white p-10 ${media}`}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</dialog>
	)
})
