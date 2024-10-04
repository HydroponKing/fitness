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
				<div className="overflow-hidden rounded-[30px] ">
					<img className="rounded-3xl" src={srcSmall} />
					<svg className="w-[18px] h-[18px] ">
						<use xlinkHref="/src/assets/img/icon/sprite.svg#icon-plus" />
					</svg>
				</div>
				<div className="h-[137px] text-base grid md:gap-[3] ml-12 mb-12;}">
					<h6 className="text-[32px] font-medium leading-[35px]">{nameRU}</h6>
					<div className="flex justify-start">
						<div className=" flex justify-start rounded-3xl bg-[#F7F7F7] px-[3] py-[3] mr-[2]">
							<svg className="w-[18px] h-[18px]">
								<use xlinkHref="/src/assets/img/icon/sprite.svg#calendar" />
							</svg>
							<div className="pl-[2]" font-bold >25 дней</div>
						</div>
						<div className="flex justify-start rounded-3xl shadow-lg bg-[#F7F7F7] px-[3] py-[3] ">
							<svg className="w-[18px] h-[18px]">
								<use xlinkHref="/src/assets/img/icon/sprite.svg#time" />
							</svg>
							<div className="pl-[2]">20-50 мин/день</div>
						</div>
					</div>
					<div className="flex gap-[6px] items-center 
							bg-gray_bg rounded-[50px]">
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