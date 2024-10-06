import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './lib/appRoutes'
import Main from './components/Main/Main'
import CoursePage from './components/CoursePage/CoursePage'

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path={AppRoutes.MAIN} element={<Main />} />
				<Route path={AppRoutes.COURSEPAGE} element={<CoursePage />} />
				<Route path={AppRoutes.COURSE} element={''} />
				<Route path={AppRoutes.WORKOUT_VIDEO} element={''} />
				<Route path={AppRoutes.USER_PROFILE} element={''} />
				<Route path={AppRoutes.LOGIN} element={''} />
				<Route path={AppRoutes.REGISTER} element={''} />
				<Route path={AppRoutes.NOT_FOUND} element={''} />
			</Routes>
		</div>
	)
}

export default App
