import { Navigate, Outlet } from 'react-router-dom'
import { AppRoutes } from '../../lib/appRoutes'
import { auth } from '../../../firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function PrivateRoute() {
	const [user] = useAuthState(auth)

	return user ? <Outlet /> : <Navigate to={AppRoutes.MAIN} />
}
