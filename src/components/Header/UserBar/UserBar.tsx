import { User } from 'firebase/auth'
import { useSignOut } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../../firebaseConfig'
import { AppRoutes } from '../../../lib/appRoutes'
import Button from '../../Button/Button'

type Props = {
	user: User
}

export default function UserBar({ user }: Props) {
	const navigate = useNavigate()
	const [signOut] = useSignOut(auth)

	const handleLogout = async () => {
		await signOut()
		navigate(AppRoutes.MAIN)
	}

	return (
		<div
			className='absolute left-[56.4rem] top-[75px] p-[30px]
			rounded-[30px] z-[2] bg-white transition-opacity
			shadow-shadow_primary mobile:left-[4.8rem]'
		>
			<div className='text-[18px] text-center leading-[20px]'>
				<p>{user.displayName}</p>
				<p className='text-gray mt-[10px]'>{user.email}</p>
			</div>

			<div className='flex flex-col gap-[10px] mt-[34px]'>
				<Button
					width='w-[206px]'
					background='bg-green_bg'
					hover='hover:bg-hover'
					active='active:bg-active active:text-white'
					onClick={() => navigate(AppRoutes.PROFILE)}
					title='Мой профиль'
				/>
				<Button
					width='w-[206px]'
					border='border'
					hover='hover:bg-gray_bg'
					active='active:bg-[#E9ECED]'
					onClick={handleLogout}
					title='Выйти'
				/>
			</div>
		</div>
	)
}
