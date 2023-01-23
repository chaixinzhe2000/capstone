/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export interface IListingCard {
	listingImg: string
	title: string
	city: string
	zipCode: string
	numOfBedrooms: number
	numOfBathrooms: number
	price: string
	numOfMatches: number
}

export const ListingCard = (props: IListingCard) => {

	const { listingImg, title, city, zipCode, numOfBathrooms, numOfBedrooms, price, numOfMatches } = props

	return (
		<div css={styles.wrapper}>
			<img css={styles.image} src={listingImg} />
			<div css={styles.header}>{title}</div>
			<div css={[styles.left10, styles.gray]}>{numOfBedrooms} Bed · {numOfBathrooms} Bath</div>
			<div css={[styles.left10, styles.gray]}>{city} {zipCode}</div>
			<div css={styles.bottomWrapper}>
				<div>
					<div css={styles.gray}>Each pays</div>
					<div css={styles.price}>{price}</div>
				</div>
				<div>
					<div css={styles.number}>{numOfMatches}</div>
					<div css={styles.matches}>matches</div>
				</div>
			</div>
		</div>
	);
}
