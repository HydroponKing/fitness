import { useModal } from '../../../hooks/useModal'
import Button from '../../Button/Button'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import ResetPassword from '../../Modals/ResetPassword/ResetPassword'

export default function UserInfo() {
	const { dialogRef, openModal, closeModal } = useModal()

	return (
		<div>
			<h2
				className='mt-[60px] text-[40px] font-semibold leading-[44px] 
				mobile:mt-[40px] mobile:text-[24px] mobile:font-medium
				mobile:leading-[26px]'
			>
				Профиль
			</h2>

			<div
				className='flex gap-[33px] mt-[40px] p-[30px] 
			  rounded-[30px] bg-white shadow-shadow_primary
				mobile:flex-col mobile:items-center mobile:mt-[24px]'
			>
				<svg className='w-[197px] h-[197px] mobile:w-[141px] mobile:h-[141px]'>
					<use xlinkHref='/src/assets/img/icon/sprite.svg#avatar_square' />
				</svg>

				<div className='flex flex-col gap-[30px] mobile:gap-[20px]'>
					<h2
						className='text-[32px] font-medium leading-[35px]
						mobile:text-[24px] mobile:leading-[26px]'
					>
						UserName
					</h2>

					<div className='text-[18px] leading-[20px] mobile:text-[16px]'>
						<p>Логин: login</p>
						<p>Пароль: password</p>
					</div>

					<div className='flex gap-[10px] mobile:flex-col'>
						<Button
							width='w-[192px]'
							background='bg-green_bg'
							hover='hover:bg-hover'
							active='active:bg-active active:text-white'
							media='mobile:w-[283px] mobile:text-[16px]'
							onClick={openModal}
							title='Изменить пароль'
						/>
						{/* Password change modal */}
						<ModalWrapper
							ref={dialogRef}
							onClick={closeModal}
							media='mobile:px-8'
						>
							<ResetPassword />
						</ModalWrapper>

						<Button
							width='w-[192px]'
							border='border'
							hover='hover:bg-[#F7F7F7]'
							active='active:bg-[#E9ECED]'
							media='mobile:w-[283px] mobile:text-[16px]'
							title='Выйти'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
