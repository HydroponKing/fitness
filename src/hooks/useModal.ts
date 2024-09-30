import { useEffect, useRef, useState } from 'react'

export const useModal = (initValue: boolean) => {
	const ref = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(initValue)

	const handleClickOutside = (event: Event) => {
		const target = event.target as HTMLDivElement
		if (ref.current && !ref.current.contains(target)) {
			setOpen(false)
		}
	}

	const toggleOpen = () => {
		setOpen(prev => !prev)
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [ref])

	return { open, toggleOpen, ref }
}
