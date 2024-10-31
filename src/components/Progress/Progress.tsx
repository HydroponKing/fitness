import { ChangeEvent } from 'react'

type Props = {
	title: string
	percent: number
	width: string
	mobile?: string
	onChange?: (event: ChangeEvent<HTMLProgressElement>) => void
}

export default function Progress({
	title,
	percent,
	width,
	mobile,
	onChange,
}: Props) {
	return (
		<label className='flex flex-col gap-2.5 text-[18px] leading-5'>
			{title} {`${percent}%`}
			<progress
				className={`${width} h-[6px] 
	      [&::-webkit-progress-bar]:rounded-lg 
	      [&::-webkit-progress-value]:rounded-lg     
      [&::-webkit-progress-bar]:bg-no_progress 
      [&::-webkit-progress-value]:bg-progress 
      [&::-moz-progress-bar]:bg-progress
	      ${mobile}`}
				value={percent || 1}
				max={100}
				onChange={onChange}
			/>
		</label>
	)
}
