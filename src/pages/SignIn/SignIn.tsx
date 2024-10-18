import { useEffect } from 'react'
import { useModal } from '../../hooks/useModal'
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper'
import Login from '../../components/Modals/Login/Login'

export default function SignIn() {
	const { dialogRef, openModal, closeModal } = useModal()

	useEffect(() => {
		openModal()
	}, [openModal])

	return (
		<ModalWrapper ref={dialogRef} onClick={closeModal} media='mobile:px-8'>
			<Login />
		</ModalWrapper>
	)
}
