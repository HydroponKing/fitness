import { AppRoutes } from '../../lib/appRoutes'
import { auth } from '../../../firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrivateRoute({ children }: PropsWithChildren) {
	const navigate = useNavigate()
	const [user] = useAuthState(auth)

	//FIXME:
	useEffect(() => {
		if (!user) {
			navigate(AppRoutes.MAIN)
		}
	}, [user, navigate])

	return <>{children}</>
}
