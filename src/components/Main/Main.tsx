import Course from '../Course/Course'
import Header from '../Header/Header'
import yoga from '/src/assets/img/yoga2.png'
import stretching from '/src/assets/img/stretching2.png'
import zumba from '/src/assets/img/zumba2.png'
import bodyflex from '/src/assets/img/bodyflex2.png'
import step from '/src/assets/img/step.png'
import Button from '../Button/Button'

export default function Main() {
	const courses = [
		{
			id: 1,
			name: "Йога",
			src: yoga,
			duration: "25дней",
			timeaday: "20-25минут/день",
			level: "Сложность",
		},
		{
			id: 2,
			name: "Стретчинг",
			src: stretching,
			duration: "25дней",
			timeaday: "20-25минут/день",
			level: "Сложность",
		},
		{
			id: 3,
			name: "Зумба",
			src: zumba,
			duration: "25дней",
			timeaday: "20-25минут/день",
			level: "Сложность",
		},
		{
			id: 4,
			name: "Степ-аэробика",
			src: step,
			duration: "25дней",
			timeaday: "20-25минут/день",
			level: "Сложность",
		},
		{
			id: 5,
			name: "Бодифлекс",
			src: bodyflex,
			duration: "25дней",
			timeaday: "20-25минут/день",
			level: "Сложность",
		}
	]
	return (
		<main>
			<Header />
			<div className="bg-gray-[100] grid place-content-center">
				<div className=" max-w-[1440px]">
					<div className="flex justify-between my-[50px] relative">
						<div className="text-[60px] h-[120px] text-pretty inline-block align-middle"> Начните заниматься спортом и улучшите качество жизни</div>
						<div className="mt-[6] p-[4] text-[32px] min-w-[288px] max-h-[120px] rounded-md bg-[#BCEC30]">Измени своё тело за полгода!</div>
						<div className="absolute top-[134px] right-[150px]">
							<img src="/src/assets/img/polygon.png" alt="polygon" />
						</div>

					</div>
					<div className="grid-cols-1 sm:grid md:grid-cols-3 -mr-[10] gap-[10]">
						{courses.map(course =>
							<Course course={course} key={course.id} />
						)}
					</div>
					<div className="flex justify-center ">
						<Button
							width='w-[103px]'
							background='bg-green_bg'
							hover='bg-hover'
							active='bg-active active:text-white'
							title='Наверх ↑'
						/>
					</div>
				</div>
			</div>
		</main>
	)
}