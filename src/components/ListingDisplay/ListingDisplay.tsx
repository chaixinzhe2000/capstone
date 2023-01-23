/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ListingCard } from '../ListingCard';
import * as styles from './styles'

export const ListingDisplay = () => {
	return (
		<div css={styles.wrapper}>
			<div css={styles.header}>Listings found in <b>Boston</b></div>
			<div css={styles.grid}>
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