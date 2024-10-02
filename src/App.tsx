import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './lib/appRoutes'
import Main from './components/Main/Main'
import Login from './components/Modals/Login/Login'

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path={AppRoutes.MAIN} element={<Main />} />
				<Route path={AppRoutes.COURSE} element={''} />
				<Route path={AppRoutes.WORKOUT_VIDEO} element={''} />
				<Route path={AppRoutes.USER_PROFILE} element={''} />
				<Route path={AppRoutes.LOGIN} element={<Login />} />
				<Route path={AppRoutes.REGISTER} element={''} />
				<Route path={AppRoutes.NOT_FOUND} element={''} />
			</Routes>
		</div>
	)
}

export default App
