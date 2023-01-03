/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { RenterCarousel } from '../RenterCarousel';
import * as styles from './styles'

export const RenterPage = () => {
	return (
		<div css={styles.pageWrapper}>
			<RenterCarousel heading="Best Overall" description='These are the best matches Kopa Assistant recommended' />
			<RenterCarousel heading="Perfect Location" description='Fellow roommates who prefer similar locations to you' />
			<RenterCarousel heading="Ideal Timing" description='Fellow roommates who have similar move in and out dates as you' />

		</div>
	);
}