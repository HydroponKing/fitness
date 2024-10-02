import { useModal } from '../../hooks/useModal'
import { setIsUser } from '../../store/features/userSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import Button from '../Button/Button'
import UserBar from '../Modals/UserBar/UserBar'

export default function Header() {
	const dispatch = useAppDispatch()
	const { isOpen, toggleOpen, ref } = useModal(false)
	const { isUser } = useAppSelector(state => state.user)

	const toggleUser = () => {
		if (isUser) {
			dispatch(setIsUser(false))
		} else {
			dispatch(setIsUser(true))
		}
	}

	return (
		<header>
			<nav className='flex justify-between items-center mt-[50px]' ref={ref}>
				<div>
					<img src='/src/assets/img/logo.png' />
					<p
						className='text-[18px] text-gray mt-[14px] 
						leading-[20px] mobile:hidden'
					>
						Онлайн-тренировки для занятий дома
					</p>
				</div>

				{isUser ? (
					<div className='relative flex gap-[16px] mobile:gap-[13px]'>
						<svg className='w-[42px] h-[42px] mobile:w-[30px] mobile:h-[30px]'>
							<use xlinkHref='/src/assets/img/icon/sprite.svg#avatar_circle' />
						</svg>

						<div
							className='flex items-center gap-[12px] cursor-pointer'
							onClick={toggleOpen}
						>
							<p className='text-[24px] leading-[26px] mobile:hidden'>
								UserName
							</p>
							<svg
								className={`w-[12px] h-[12px] mt-[2px] transition-transform 
									${isOpen && 'animate-rotation'}`}
							>
								<use xlinkHref='/src/assets/img/icon/sprite.svg#dropdown_arrow' />
							</svg>
						</div>

						{isOpen && <UserBar />}
					</div>
				) : (
					<Button
						width='w-[103px]'
						background='bg-green_bg'
						hover='hover:bg-hover'
						active='active:bg-active active:text-white'
						onClick={toggleUser}
						title='Войти'
					/>
				)}
			</nav>
		</header>
	)
}
