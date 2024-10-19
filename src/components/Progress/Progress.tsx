import { ChangeEvent } from 'react'

type Props = {
	title: string
	percentValue: string
	width: string
	mobile?: string
	value: string
	onChange?: (event: ChangeEvent<HTMLProgressElement>) => void
}

export default function Progress({
	title,
	percentValue,
	width,
	mobile,
	value,
	onChange,
}: Props) {
	return (
		<label className='flex flex-col gap-2.5 text-[18px] leading-5'>
			{title} {`${percentValue}%`}
			<progress
				className={`${width} h-[6px] 
	      [&::-webkit-progress-bar]:rounded-lg 
	      [&::-webkit-progress-value]:rounded-lg     
      [&::-webkit-progress-bar]:bg-no_progress 
      [&::-webkit-progress-value]:bg-progress 
      [&::-moz-progress-bar]:bg-progress
	      ${mobile}`}
				value={value}
				max='100'
				onChange={onChange}
			/>
		</label>
	)
}
