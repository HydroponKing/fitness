import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import { AppRoutes } from '../../../lib/appRoutes'

export default function UserBar() {
	return (
		<div
			className='absolute left-[-71px] top-[75px] p-[30px] 
			rounded-[30px] z-[1] bg-white transition-opacity
			shadow-shadow_primary mobile:left-[-13.2rem]'
		>
			<div className='text-[18px] text-center leading-[20px]'>
				<p>UserName</p>
				<p className='text-gray mt-[10px]'>user-email@mail.ru</p>
			</div>

			<div className='flex flex-col gap-[10px] mt-[34px]'>
				<Link to={AppRoutes.USER_PROFILE}>
					<Button
						width='w-[206px]'
						background='bg-green_bg'
						hover='hover:bg-hover'
						active='active:bg-active active:text-white'
						title='Мой профиль'
					/>
				</Link>

				<Button
					width='w-[206px]'
					border='border'
					hover='hover:bg-[#F7F7F7]'
					active='active:bg-[#E9ECED]'
					title='Выйти'
				/>
			</div>
		</div>
	)
}
