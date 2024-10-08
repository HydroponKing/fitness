import { courseType } from "../../api/types"

export type CourseOneType = {
	course: courseType,
}
export default function Course({ course }: CourseOneType) {
	const { nameRU, srcSmall } = course
	return (
		<>
			<div className="relative flex flex-col gap-[24px] w-[360px] 
				mt-[40px] rounded-[30px] bg-white shadow-shadow_primary
				mobile:flex-col mobile:items-center mobile:mt-[24px] mobile:w-[343px]">
				<div className="rounded-[30px] ">
					<img className="rounded-3xl relative" src={srcSmall} />
					<svg className="w-[27px] h-[27px] absolute top-[20px] right-[20px] cursor-pointer">
						<use xlinkHref="/src/assets/img/icon/sprite.svg#add_course_circle" />
					</svg>
				</div>
				<div className=" text-base grid md:gap-[3] ml-12 mb-12;} gap-[6px]">
					<h6 className="text-[32px] font-medium leading-[35px]">{nameRU}</h6>
					<div className="flex flex-wrap gap-[6px]">
						<div className=" flex items-center p-[10px] gap-[6px] rounded-[50px] bg-gray_bg">
							<svg className="w-[18px] h-[18px]">
								<use xlinkHref="/src/assets/img/icon/sprite.svg#calendar" />
							</svg>
							<div className="pl-[2]">25 дней</div>
						</div>
						<div className="flex items-center p-[10px] gap-[6px] shadow-lg bg-gray_bg rounded-[50px]">
							<svg className="w-[18px] h-[18px]">
								<use xlinkHref="/src/assets/img/icon/sprite.svg#time" />
							</svg>
							<div className="pl-[2]">20-50 мин/день</div>
						</div>
					</div>
					<div className="flex items-center w-[129px] p-[10px] gap-[6px]
							bg-gray_bg rounded-[50px] mb-[15px]">
						<svg className="w-[18px] h-[18px]">
							<use xlinkHref="/src/assets/img/icon/sprite.svg#difficulty_signal" />
						</svg>
						<div className="pl-[2]">Сложность</div>
					</div>
				</div>
			</div>
		</>
	)
}