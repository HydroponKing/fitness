import { useNavigate } from "react-router-dom"
import type { WorkoutListProps } from '../../../../api/types'


export default function WorkoutList({quality, inputName, title, subtitle, workoutLink}:WorkoutListProps) {
	const navigate = useNavigate()

	function handleClick() {
		navigate(workoutLink)
	}

	return (
		<label onClick={handleClick}
			className='flex items-center mb-2.5 pb-2.5
			border-b border-b-[#C4C4C4] cursor-pointer hover:bg-slate-200 rounded-xl'
		>
			<input
				className='w-6 h-6 mr-2.5 appearance-none cursor-pointer
				border rounded-full checked:border-0 
				checked:bg-cover checked:bg-check-success
				mobile:w-5 mobile:h-5'
				type='checkbox'
				name={inputName}
				checked={!!quality}
				onChange={()=>{}}
			/>

			<div className='flex flex-col gap-2.5'>
				<h3
					className='text-[24px] leading-[26px] mobile:text-lg/5'
				>
					{title}
				</h3>
				<p className='leading-[18px] mobile:text-sm/4'>
					{subtitle}
				</p>
			</div>
		</label>
	)
}