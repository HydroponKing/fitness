import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../lib/appRoutes'
import WorkoutList from './WorkoutList/WorkoutList'
import Button from '../../Button/Button'
import { useState } from 'react'

const arr = [
	{
		name: 'yoga',
		title : 'Растягиваем мышцы бедра',
		subtitle : 'Йога на каждый день / 1 день'
	},
	{
		name: 'kardio',
		title : 'Прокачиваем сердце',
		subtitle : 'Кардио на каждый день / 1 день'
	}
]

export default function SelectWorkout() {
	const navigate = useNavigate()
	const [value, setValue] = useState ({
		yoga : false,
		kardio : false
	})
	function handleInput (e) {
		setValue({...value, [e.target.name]:e.target.checked})
	}

	console.log(value);
	

	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-[32px] font-medium leading-9'>Выберите тренировку</h2>

			<div
				className='mt-12 mb-[34px] h-[360px] pr-5
				overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-1.5
		    [&::-webkit-scrollbar]:bg-scroll [&::-webkit-scrollbar]:rounded-[10px]  
   	  [&::-webkit-scrollbar-thumb]:bg-scroll_thumb 
			  [&::-webkit-scrollbar-thumb]:rounded-[10px]
				mobile:mt-[34px]'
			>
				{arr.map((item, index) => {
					return <WorkoutList 
						key={index} 
						handleInput={handleInput} 
						quality={value[item.name]} 
						inputName={item.name} 
						title={item.title} 
						subtitle={item.subtitle} />
					})}
			</div>

			<Button
				width='w-[380px]'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				media='mobile:w-full mobile:text-[16px]'
				onClick={() => navigate(AppRoutes.WORKOUT)}
				title='Начать'
			/>
		</div>
	)
}
