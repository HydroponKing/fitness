import { User } from 'firebase/auth'
import UserBar from '../UserBar/UserBar'

type Props = {
	user: User
	isOpen: boolean
	toggleOpen: () => void
}

export default function UserNav({ user, isOpen, toggleOpen }: Props) {
	return (
		<div className='flex gap-[16px] mobile:gap-[13px]'>
			<svg className='w-[42px] h-[42px] mobile:w-[30px] mobile:h-[30px]'>
				<use xlinkHref='/src/assets/img/icon/sprite.svg#avatar_circle' />
			</svg>

			<div
				className='flex items-center gap-[12px] cursor-pointer'
				onClick={toggleOpen}
			>
				<p className='text-[24px] leading-[26px] mobile:hidden'>
					{user.displayName}
				</p>
				<svg
					className={`w-[12px] h-[12px] mt-[2px] transition-transform 
				${isOpen && 'animate-rotation'}`}
				>
					<use xlinkHref='/src/assets/img/icon/sprite.svg#dropdown_arrow' />
				</svg>
			</div>

			{/* open dropdown menu */}
			{isOpen && <UserBar user={user} />}
		</div>
	)
}
