import { useEffect, useState } from 'react'
import Button from './Button'



export default function ScrollBtn() {
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
		<div
			className='mt-[34px] flex flex-col items-center 
		mobile:mt-[24px] mobile:items-end'
		>
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




