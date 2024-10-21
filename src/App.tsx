import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { AppRoutes } from './lib/appRoutes'
import Home from './pages/Home/Home'
import CoursePage from './components/CoursePage/CoursePage'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Profile from './pages/Profile/Profile'
import Workout from './pages/Workout/Workout'
import NotFound from './pages/NotFound/NotFound'

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path={AppRoutes.MAIN} element={<Home />}>
					<Route path={AppRoutes.REGISTER} element={<SignUp />} />
					<Route path={AppRoutes.LOGIN} element={<SignIn />} />
				</Route>
				{/* if user auth, open children routes */}
				<Route element={<PrivateRoute />}>
					<Route path={AppRoutes.PROFILE} element={<Profile />} />
					<Route path={AppRoutes.WORKOUT} element={<Workout />} />
				</Route>
				<Route path={AppRoutes.COURSEPAGE} element={<CoursePage />} />
				<Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
