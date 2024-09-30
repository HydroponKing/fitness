import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { CSSProperties } from 'react'

type Props = {
	count?: number
	width: number
	height: number
	borderRadius?: number
	css?: CSSProperties
}

export default function SkeletonLoader({
	count,
	width,
	height,
	borderRadius,
	css,
}: Props) {
	return (
		<SkeletonTheme baseColor='#313131' highlightColor='#ad61ff'>
			<Skeleton
				count={count}
				width={width}
				height={height}
				borderRadius={borderRadius}
				style={css}
			/>
		</SkeletonTheme>
	)
}
