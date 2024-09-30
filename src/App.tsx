import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './lib/appRoutes'
import Main from './components/Main/Main'

function App() {
	return (
		<Routes>
			<Route path={AppRoutes.MAIN} element={<Main />} />
			<Route path={AppRoutes.COURSE} element={''} />
			<Route path={AppRoutes.WORKOUT_VIDEO} element={''} />
			<Route path={AppRoutes.USER_PROFILE} element={''} />
			<Route path={AppRoutes.LOGIN} element={''} />
			<Route path={AppRoutes.REGISTER} element={''} />
			<Route path={AppRoutes.NOT_FOUND} element={''} />
		</Routes>
	)
}

export default App
