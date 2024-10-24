export default function WorkoutList({quality, handleInput, inputName, title, subtitle}) {

	return (
		<label
			className='flex items-center mb-2.5 pb-2.5
			border-b border-b-[#C4C4C4] cursor-pointer'
		>
			<input
				className='w-6 h-6 mr-2.5 appearance-none cursor-pointer
				border rounded-full checked:border-0 
				checked:bg-cover checked:bg-check-success
				mobile:w-5 mobile:h-5'
				type='checkbox'
				name={inputName}
				value ={quality}
				onChange={handleInput}
			/>

			<div className='flex flex-col gap-2.5'>
				<h3
					className='text-[24px] leading-[26px]
					mobile:text-[18px] mobile:leading-5'
				>
					{title}
				</h3>
				<p className='leading-[18px] mobile:text-[14px] mobile:leading-4'>
					{subtitle}
				</p>
			</div>
		</label>
	)
}
