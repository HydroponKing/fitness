import ScrollBtn from '../Button/ScrollBtn'
import Header from '../Header/Header'
import UserCourses from './UserCourses/UserCourses'
import UserInfo from './UserInfo/UserInfo'

export default function UserProfile() {
	return (
		<div>
			<Header />
			<UserInfo />
			<UserCourses />
			<ScrollBtn />
		</div>
	)
}
