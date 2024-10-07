import { useEffect, useRef, useState } from 'react'

export const useModal = (initValue: boolean) => {
	const [isOpen, setIsOpen] = useState(initValue)
	const ref = useRef<HTMLDivElement>(null)
	const dialogRef = useRef<HTMLDialogElement>(null)

	//open/close for dropdown/modals
	const toggleOpen = () => {
		if (isOpen) {
			dialogRef.current?.close()
		} else {
			dialogRef.current?.showModal()
		}

		setIsOpen(prev => !prev)
	}

	//dropdown menu close listener when outside click
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLDivElement
			if (ref.current && !ref.current.contains(target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [ref])

	return { isOpen, toggleOpen, ref, dialogRef }
}
