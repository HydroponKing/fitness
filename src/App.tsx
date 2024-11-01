import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { AppRoutes } from './lib/appRoutes'
import Home from './pages/Home/Home'
import CoursePage from './components/CoursePage/CoursePage'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Profile from './pages/Profile/Profile'
import Workout from './pages/Workout/Workout'
import NotFound from './pages/NotFound/NotFound'

const signingRouterData = [
	{
		path: AppRoutes.LOGIN,
		element: <SignIn />,
	},
	{
		path: AppRoutes.REGISTER,
		element: <SignUp />,
	},
]

const router = createBrowserRouter([
	{
		path: AppRoutes.MAIN,
		element: <Home />,
		children: signingRouterData, // [...signingRouterData, choosingTrainRouterData(userContext)],
	},
	{
		path: AppRoutes.COURSES,
		element: <Home />,
		children: signingRouterData, // [...signingRouterData, choosingTrainRouterData(userContext)],
	},
	{
		path: AppRoutes.COURSEPAGE,
		element: <CoursePage />,
		children: signingRouterData, // [...signingRouterData, choosingTrainRouterData(userContext)],
	},
	{
		element: <PrivateRoute />,
		children: [
			{
				path: AppRoutes.WORKOUT,
				element: <Workout />,
				// children: [{
				//   path:    pages.WRITE,
				//   element: <WriteProgressPage />,
				// }],
			},
			{
				path: AppRoutes.PROFILE,
				element: <Profile />,
				// children: [choosingTrainRouterData(userContext)],
			},
		],
	},
	{
		path: AppRoutes.NOT_FOUND,
		element: <NotFound />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
