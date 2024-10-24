import { useModal } from '../../../hooks/useModal'
import WorkoutQuantityTimes from './WorkoutQuantityTimes/WorkoutQuantityTimes'
import Button from '../../Button/Button'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import ProgressAccepted from '../ProgressAccepted/ProgressAccepted'
import { ChangeEvent, useState } from 'react'

export default function ProgressCount() {
	const { dialogRef, openModal, closeModal } = useModal()
	const [value, setValue] = useState({
		question1 : ''
	});

	function handleInput (e: ChangeEvent<HTMLInputElement>) {
		setValue({...value, [e.target.name]:e.target.value})
	}
	return (
		<div>
			<h3 className='text-[32px] font-medium leading-9'>Мой прогресс</h3>

			<div
				className='flex flex-col gap-5 mt-12 mb-[34px] pr-5 h-[346px]
				overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-1.5
		    [&::-webkit-scrollbar]:bg-scroll [&::-webkit-scrollbar]:rounded-[10px]  
   	  [&::-webkit-scrollbar-thumb]:bg-scroll_thumb 
			  [&::-webkit-scrollbar-thumb]:rounded-[10px]
				mobile:mt-[34px]'
			>
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' name={'question1'} value={value.question1} hadleInput={handleInput}/>
				{/* <WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' />
				<WorkoutQuantityTimes exercise='Сколько раз вы сделали наклоны вперед?' /> */}
			</div>

			<Button
				width='w-full'
				background='bg-green_bg'
				hover='hover:bg-hover'
				active='active:bg-active active:text-white'
				onClick={openModal}
				title='Сохранить'
			/>
			{/* Success save progress modal */}
			<ModalWrapper ref={dialogRef} onClick={closeModal}>
				<ProgressAccepted />
			</ModalWrapper>
		</div>
	)
}
