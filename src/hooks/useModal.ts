import { useRef } from 'react'

export const useModal = () => {
	const dialogRef = useRef<HTMLDialogElement>(null)

	//modal open handler
	const openModal = () => dialogRef.current?.showModal()

	//modal close handler
	const closeModal = () => dialogRef.current?.close()

	return { dialogRef, openModal, closeModal }
}
