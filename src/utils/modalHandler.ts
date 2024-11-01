type Props = {
	openModal: () => void
	closeModal: () => void
	navigate?: (path: string) => void
	route?: string
}

export const modalHandler = ({
	openModal,
	closeModal,
	navigate,
	route,
}: Props) => {
	openModal()

	setTimeout(() => {
		closeModal()
		if (navigate && route) navigate(route)
	}, 1500)
}
