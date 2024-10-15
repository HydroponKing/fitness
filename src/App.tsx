import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './lib/appRoutes'
import Main from './components/Main/Main'
import CoursePage from './components/CoursePage/CoursePage'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Profile from './pages/Profile/Profile'

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path={AppRoutes.MAIN} element={<Main />}>
					<Route path={AppRoutes.REGISTER} element={<SignUp />} />
					<Route path={AppRoutes.LOGIN} element={<SignIn />} />
				</Route>
				<Route path={AppRoutes.USER_PROFILE} element={<Profile />} />
				<Route path={AppRoutes.COURSEPAGE} element={<CoursePage />} />
				<Route path={AppRoutes.WORKOUT_VIDEO} element={''} />
				<Route path={AppRoutes.NOT_FOUND} element={''} />
			</Routes>
		</div>
	)
}

export default App
