import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
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
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Home />} children={<><Route path={"sign-in/"} element={SignIn()} /><Route path={"sing-up/"} element={SignUp()} /></>} />
				<Route path={"/courses/"} element={<Home />} />
				<Route path={"/courses/:id/"} element={<CoursePage />} />
				<Route path={"/courses/:id/workouts/"} element={<CoursePage />} />

				{/* <Route path={AppRoutes.MAIN} element={<Home />}>
					<Route path={AppRoutes.COURSES} element={<Outlet />}>
						<Route path={AppRoutes.COURSEPAGE} element={<CoursePage />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path={AppRoutes.PROFILE} element={<Profile />} />
						<Route path={AppRoutes.WORKOUT} element={<Workout />} />
					</Route>
					<Route path={AppRoutes.REGISTER} element={<SignUp />} />
					<Route path={AppRoutes.LOGIN} element={<SignIn />} />
				</Route> */}
				{/* if user auth, open children routes */}
				<Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
