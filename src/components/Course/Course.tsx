import { courseType } from "../../api/types"

export type CourseOneType = {
	course: courseType,
}
export default function Course({ course }: CourseOneType) {
	const { name, duration, timeaday, level, src } = course
	return (
		<>
			<div className="relative shadow-lg max-w-[360px] mt-8 mb-2 flex flex-col self-start rounded-3xl bg-white sm:shrink-0 sm:grow sm:basis-0 box-border">
				<div className="  mx-[0] mt-[0] max-w-[360px] max-h-[501px]">
					<img className="rounded-3xl" src={src}></img>
					<svg className="absolute top-[20px] right-[40px]">
						<use xlinkHref="/src/assets/img/icon/sprite.svg#icon-plus" />
					</svg>
				</div>
				<div className="p-[6] mb-[4] text-base grid md:gap-[3] ">
					<h6 className="font-bold text-[32px] my-6">{name}</h6>
					<div className="flex justify-start">
						<div className=" flex justify-start rounded-3xl bg-[#F7F7F7] px-[3] py-[3] mr-[2]">
							<svg className="w-[18px] h-[18px]">
								<use xlinkHref="/src/assets/img/icon/sprite.svg#calendar" />
							</svg>
							<div className="pl-[2]" font-bold >{duration}</div>
						</div>
						<div className="flex justify-start rounded-3xl shadow-lg bg-[#F7F7F7] px-[3] py-[3] ">
							<svg className="w-[18px] h-[18px]">
								<use xlinkHref="/src/assets/img/icon/sprite.svg#time" />
							</svg>
							<div className="pl-[2]">{timeaday}</div>
						</div>
					</div>
					<div className="flex justify-start rounded-3xl bg-[#F7F7F7] px-[3] py-[3] mr-[24] ">
						<svg className="w-[18px] h-[18px]">
							<use xlinkHref="/src/assets/img/icon/sprite.svg#difficulty_signal" />
						</svg>
						<div className="pl-[2]">{level}</div>
					</div>
				</div>
			</div>
		</>
	)
}