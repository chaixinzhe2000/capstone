/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { IRenterCard, RenterCard } from '../RenterCard'
import * as styles from './styles'

interface RenterCarouselProps {
	heading: string,
	description: string,
	data: IRenterCard[]
}

export const RenterCarousel = (props: RenterCarouselProps) => {

	const { heading, description, data } = props

	return (
		<div css={styles.wrapper}>
			<div css={styles.heading}>{heading}</div>
			<div css={styles.description}>{description}</div>
			<div css={styles.scrollWrapper}>
				{data.map((renter, index) => {
					return <RenterCard {...renter} key={index} />
				})}
			</div>
		</div>
	);
}