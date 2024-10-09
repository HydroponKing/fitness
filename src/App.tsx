import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './lib/appRoutes'
import Main from './components/Main/Main'
import UserProfile from './components/UserProfile/UserProfile'
import CoursePage from './components/CoursePage/CoursePage'
import Login from './components/Modals/Login/Login'
import Register from './components/Modals/Register/Register'

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path={AppRoutes.MAIN} element={<Main />} />
				<Route path={AppRoutes.COURSE} element={''} />
				<Route path={AppRoutes.COURSEPAGE} element={<CoursePage />}/>
				<Route path={AppRoutes.WORKOUT_VIDEO} element={''} />
				<Route path={AppRoutes.USER_PROFILE} element={<UserProfile />} />
				<Route path={AppRoutes.LOGIN} element={<Login />} />
				<Route path={AppRoutes.REGISTER} element={<Register />} />
				<Route path={AppRoutes.NOT_FOUND} element={''} />
			</Routes>
		</div>
	)
}

export default App
