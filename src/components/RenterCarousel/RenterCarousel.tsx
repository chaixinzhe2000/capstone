/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ListingCard } from '../ListingCard'
import * as styles from './styles'

interface RenterCarouselProps {
	heading: string,
	description: string,
	data?: any // should be changed to IRenter[], should not be optional
}

export const RenterCarousel = (props: RenterCarouselProps) => {

	const { heading, description } = props

	return (
		<div css={styles.wrapper}>
			<div css={styles.heading}>{heading}</div>
			<div css={styles.description}>{description}</div>
			<div css={styles.scrollWrapper}>
				<ListingCard />
				<ListingCard />
				<ListingCard />
				<ListingCard />
				<ListingCard />
				<ListingCard />
			</div>
		</div>
	);
}