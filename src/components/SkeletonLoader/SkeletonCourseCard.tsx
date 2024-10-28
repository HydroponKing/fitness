import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function SkeletonCourseCard() {
	return (
		<SkeletonTheme baseColor='#ebebeb' highlightColor='#BCEC30'>
			<div
				className='relative bg-white shadow-shadow_primary
				w-[360px] rounded-[30px] mobile:w-[343px]'
			>
				{/* Top block */}
				<div>
					{/* Course img poster skeleton */}
					<div className='-mt-1'>
						<Skeleton height={325} borderRadius={30} />
					</div>
					{/* Add/Delete course skeleton button */}
					<div className='absolute top-[20px] right-[20px]'>
						<Skeleton
							width={27}
							height={27}
							borderRadius={50}
							baseColor='#fff'
						/>
					</div>
				</div>

				{/* Down block */}
				<div
					className='flex flex-wrap gap-[6px]
					mt-6 px-[30px] pb-[15px] mobile:px-[22px]'
				>
					{/* Course title skeleton */}
					<Skeleton width={300} height={35} className='mb-[14px]' />
					{/* Course info icons */}
					<Skeleton width={103} height={38} borderRadius={50} />
					<Skeleton width={163} height={38} borderRadius={50} />
					<Skeleton width={129} height={38} borderRadius={50} />
				</div>
			</div>
		</SkeletonTheme>
	)
}
