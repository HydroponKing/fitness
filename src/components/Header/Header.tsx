import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useModal } from '../../hooks/useModal'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseConfig'
import Button from '../Button/Button'
import UserNav from './UserNav/UserNav'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import Login from '../Modals/Login/Login'

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

				{/* if user auth, hidden "Enter" button, display user nav */}
				{user ? (
					<UserNav user={user} isOpen={isOpen} toggleOpen={toggleOpen} />
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
