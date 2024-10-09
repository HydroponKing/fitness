import { useEffect, useState } from 'react'
import Button from './Button'

type Props = {
	margin?: string
	mobile?: string
}

export default function ScrollBtn({ margin, mobile }: Props) {
	const [isShow, setIsShow] = useState(false)

	const scrollCondition = () => {
		if (window.scrollY > 400) {
			setIsShow(true)
		} else setIsShow(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollCondition)
		return () => window.removeEventListener('scroll', scrollCondition)
	}, [])

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className={`flex flex-col items-center ${margin} ${mobile}`}>
			{isShow && (
				<Button
					width='w-[127px]'
					background='bg-green_bg'
					hover='hover:bg-hover'
					active='active:bg-active active:text-white'
					onClick={goToTop}
					title='Наверх ↑'
				/>
			)}
		</div>
	)
}
