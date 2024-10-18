import { useModal } from '../../hooks/useModal'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseConfig'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import Login from '../Modals/Login/Login'
import Button from '../Button/Button'
import UserBar from './UserBar/UserBar'

export default function Header() {
	const { ref, isOpen, toggleOpen } = useOutsideClick()
	const { dialogRef, openModal, closeModal } = useModal()
	const [user] = useAuthState(auth)

	return (
		<header>
			<nav
				className='relative flex justify-between items-center mt-[50px]'
				ref={ref}
			>
				<div>
					<img src='/src/assets/img/logo.png' alt='logo' />
					<p
						className='text-[18px] text-gray mt-[15px]  
						leading-[20px] mobile:hidden'
					>
						Онлайн-тренировки для занятий дома
					</p>
				</div>

				{/* if user auth, hidden "Enter" button, display user menu */}
				{user ? (
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
				) : (
					<div>
						<Button
							width='w-[103px]'
							background='bg-green_bg'
							hover='hover:bg-hover'
							active='active:bg-active active:text-white'
							onClick={openModal}
							title='Войти'
						/>
						{/* Login modal */}
						<ModalWrapper
							ref={dialogRef}
							onClick={closeModal}
							media='mobile:px-8'
						>
							<Login />
						</ModalWrapper>
					</div>
				)}
			</nav>
		</header>
	)
}
