import { Navigate, Outlet } from 'react-router-dom'
import { AppRoutes } from '../../lib/appRoutes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebaseConfig'

export default function PrivateRoute() {
	const user = useAuthState(auth)

	return user ? <Outlet /> : <Navigate to={AppRoutes.MAIN} />
}
