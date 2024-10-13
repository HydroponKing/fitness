import { useEffect } from 'react'
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper'
import Register from '../../components/Modals/Register/Register'
import { useModal } from '../../hooks/useModal'

export default function SignUp() {
	const { dialogRef, closeModal, openModal } = useModal()

	useEffect(() => {
		openModal()
	}, [openModal])

	return (
		<ModalWrapper ref={dialogRef} onClick={closeModal}>
			<Register />
		</ModalWrapper>
	)
}
