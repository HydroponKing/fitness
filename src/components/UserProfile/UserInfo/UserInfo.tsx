import { useNavigate } from 'react-router-dom'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebaseConfig'
import { AppRoutes } from '../../../lib/appRoutes'
import { useModal } from '../../../hooks/useModal'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import ResetPassword from '../../Modals/ResetPassword/ResetPassword'
import Button from '../../Button/Button'

export default function UserInfo() {
	const navigate = useNavigate()
	const [user] = useAuthState(auth)
	const [signOut] = useSignOut(auth)
	const { dialogRef, openModal, closeModal } = useModal()

	const handleLogout = async () => {
		await signOut()
		navigate(AppRoutes.MAIN)
	}

	return (
		<div>
			<h2
				className='mt-[60px] text-[40px] font-semibold leading-[44px] 
				mobile:mt-10 mobile:text-2xl mobile:font-medium
				mobile:leading-[26px]'
			>
				Профиль
			</h2>

			<div
				className='flex gap-[33px] mt-10 p-[30px] 
			  rounded-[30px] bg-white shadow-shadow_primary
				mobile:flex-col mobile:items-center mobile:mt-6'
			>
				<svg className='w-[197px] h-[197px] mobile:w-[141px] mobile:h-[141px]'>
					<use xlinkHref='/src/assets/img/icon/sprite.svg#avatar_square' />
				</svg>

				<div className='flex flex-col gap-[30px] mobile:gap-5'>
					<h2
						className='text-[32px] font-medium leading-9
						mobile:text-2xl mobile:leading-[26px]'
					>
						{user?.displayName}
					</h2>

					<div className='text-lg leading-5 mobile:text-base'>
						<p>Логин: {user?.email}</p>
						<p>Пароль: {user?.uid}</p>
					</div>

					<div className='flex gap-[10px] mobile:flex-col'>
						<Button
							width='w-[192px]'
							background='bg-green_bg'
							hover='hover:bg-hover'
							active='active:bg-active active:text-white'
							media='mobile:w-[283px] mobile:text-base'
							onClick={openModal}
							title='Изменить пароль'
						/>
						{/* Password change modal */}
						<ModalWrapper
							ref={dialogRef}
							onClick={closeModal}
							media='mobile:px-8'
						>
							<ResetPassword logout={handleLogout} />
						</ModalWrapper>

						<Button
							width='w-[192px]'
							border='border'
							hover='hover:bg-gray_bg'
							active='active:bg-[#E9ECED]'
							media='mobile:w-[283px] mobile:text-base'
							onClick={handleLogout}
							title='Выйти'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
