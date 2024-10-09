import { useEffect, useRef, useState } from 'react'

export const useOutsideClick = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(false)

	//isOpen state handler
	const toggleOpen = () => setIsOpen(prev => !prev)

	//click outside handler
	const handleClickOutside = ({ target }: MouseEvent) => {
		if (!ref.current?.contains(target as Node)) {
			setIsOpen(false)
		}
	}

	//close listener when outside click
	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return { ref, isOpen, toggleOpen }
}
