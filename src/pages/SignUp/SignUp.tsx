import { useEffect } from 'react'
import Register from '../../components/Modals/Register/Register'
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper'
import { useModal } from '../../hooks/useModal'

export default function SignUp() {
	const { dialogRef, openModal, closeModal } = useModal()

	useEffect(() => {
		openModal()
	}, [openModal])

	return (
		<ModalWrapper ref={dialogRef} onClick={closeModal}>
			<Register />
		</ModalWrapper>
	)
}
