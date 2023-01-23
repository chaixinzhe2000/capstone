/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ListingData } from '../../data/ListingData';
import { ListingCard } from '../ListingCard';
import * as styles from './styles'

export const ListingDisplay = () => {
	return (
		<div css={styles.wrapper}>
			<div css={styles.header}>Listings found in <b>Boston</b></div>
			<div css={styles.grid}>
				{ListingData.map((data, index) => {
					return <ListingCard {...data} key={index} />
				})}
			</div>
		</div>
	);
}