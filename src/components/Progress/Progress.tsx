import { ChangeEvent } from 'react'

type Props = {
	value: string
	onChange?: (event: ChangeEvent<HTMLProgressElement>) => void
}

export default function Progress({ value, onChange }: Props) {
	return (
		<div>
			<progress
				className='w-full h-[6px] 
				[&::-webkit-progress-bar]:rounded-lg 
				[&::-webkit-progress-value]:rounded-lg     
				[&::-webkit-progress-bar]:bg-no_progress 
				[&::-webkit-progress-value]:bg-progress 
				[&::-moz-progress-bar]:bg-progress'
				value={value}
				max='100'
				onChange={onChange}
			/>
		</div>
	)
}
