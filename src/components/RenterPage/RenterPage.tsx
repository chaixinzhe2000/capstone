/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { renterData } from '../../data/RenterData';
import { RenterCarousel } from '../RenterCarousel';
import * as styles from './styles'

export const RenterPage = () => {

	return (
		<div css={styles.pageWrapper}>
			<RenterCarousel heading="Best Overall" description='These are the best matches Kopa Assistant recommended' data={renterData.slice(0, 8)} />
			<RenterCarousel heading="Perfect Location" description='Fellow roommates who prefer similar locations to you' data={renterData.slice(8, 16)} />
			<RenterCarousel heading="Ideal Timing" description='Fellow roommates who have similar move in and out dates as you' data={renterData.slice(16, 21)} />
		</div>
	);
}