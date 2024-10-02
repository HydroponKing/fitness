import { useEffect, useRef, useState } from 'react'

export const useModal = (initValue: boolean) => {
	const ref = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(initValue)

	const handleClickOutside = (event: Event) => {
		const target = event.target as HTMLDivElement
		if (ref.current && !ref.current.contains(target)) {
			setIsOpen(false)
		}
	}

	const toggleOpen = () => {
		setIsOpen(prev => !prev)
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [ref])

	return { isOpen, toggleOpen, ref }
}
