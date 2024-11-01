import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useModal } from '../../../hooks/useModal'
import { auth } from '../../../../firebaseConfig'
import { AppRoutes } from '../../../lib/appRoutes'
import { addCourseToUser, getUserCourses } from '../../../api/api'
import { courseType } from '../../../api/types'
import { modalHandler } from '../../../utils/modalHandler'
import ModalWrapper from '../../ModalWrapper/ModalWrapper'
import InfoMsg from '../../Modals/InfoMsg/InfoMsg'

type Props = {
	course: courseType
}

export default function CourseItem({ course }: Props) {
	const navigate = useNavigate()
	const [user] = useAuthState(auth)
	const { dialogRef, openModal, closeModal } = useModal()
	const { nameRU, srcSmall, _id } = course

	const onAddCourse = async (event: MouseEvent) => {
		//отменяем переход по ссылке при клике
		event.preventDefault()
		//проверяем авторизацию пользователя
		if (!user) return
		//проверяем, какие курсы есть у пользователя
		const userCourses = await getUserCourses(user.uid)
		const isExist = userCourses.some(userCourse => userCourse.id === course._id)
		if (isExist) return
		//запрос на сервер...
		await addCourseToUser({
			userId: user.uid,
			courseId: _id,
		})
		//открываем инфо-модалку и переходим на страницу профиля
		modalHandler({ openModal, closeModal, navigate, route: AppRoutes.PROFILE })
	}

	return (
		<div
			className='relative flex flex-col gap-[24px] w-[360px]
			rounded-[30px] bg-white shadow-shadow_primary
			mobile:flex-col mobile:items-center mobile:w-[343px]'
		>
			<div>
				<img className='rounded-[30px]' src={srcSmall} alt='course-poster' />
				{/* Add course to user button */}
				<div title='Добавить курс'>
					<svg
						className='w-[32px] h-[32px]
						absolute top-[20px] right-[20px]'
						onClick={onAddCourse}
					>
						<use
							xlinkHref='/src/assets/img/icon/
						sprite.svg#add_course_circle'
						/>
					</svg>
				</div>
				{/* Success info modal */}
				<ModalWrapper ref={dialogRef} onClick={openModal}>
					<InfoMsg title='Курс успешно добавлен' />
				</ModalWrapper>
			</div>

			<div
				className='flex flex-col gap-[20px] px-[30px] pb-[15px]
					mobile:px-[22px]'
			>
				<h6
					className='text-[32px] font-medium leading-[35px]
						mobile:text-[24px] mobile:leading-[26px]'
				>
					{nameRU}
				</h6>

				<div className='flex flex-wrap gap-[6px]'>
					<div
						className='flex gap-[6px] items-center	
						bg-gray_bg p-[10px] rounded-[50px]'
					>
						<svg className='w-[18px] h-[18px]'>
							<use xlinkHref='/src/assets/img/icon/sprite.svg#calendar' />
						</svg>
						<p>25 дней</p>
					</div>

					<div
						className='flex gap-[6px] items-center	
						bg-gray_bg p-[10px] rounded-[50px]'
					>
						<svg className='w-[18px] h-[18px]'>
							<use xlinkHref='/src/assets/img/icon/sprite.svg#time' />
						</svg>
						<p>20-50 мин/день</p>
					</div>

					<div
						className='flex gap-[6px] items-center	
						bg-gray_bg p-[10px] rounded-[50px]'
					>
						<svg className='w-[18px] h-[18px]'>
							<use
								xlinkHref='/src/assets/img/icon/
								sprite.svg#difficulty_signal'
							/>
						</svg>
						<p>Сложность</p>
					</div>
				</div>
			</div>
		</div>
	)
}
