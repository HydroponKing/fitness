import { ChangeEventHandler } from "react"

type Props = {
	exercise: string,
	value : string,
	name: string,
	hadleInput: ChangeEventHandler<HTMLInputElement>,
}

export default function WorkoutQuantityTimes({ exercise, value, hadleInput, name }: Props) {
	return (
		<label
			className='flex flex-col gap-2.5 w-[320px] text-[18px]
			leading-5 mobile:w-full mobile:text-[16px]'
		>
			{exercise}
			<input
				className='h-[52px] p-4 border border-placeholder rounded-lg 
				mobile:h-[47px]'
				type='text'
				placeholder='0'
				value = {value}
				name={name}
				onChange={hadleInput}
			/>
		</label>
	)
}
