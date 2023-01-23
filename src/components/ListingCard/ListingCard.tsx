/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export const ListingCard = () => {
	return (
		<div css={styles.wrapper}>
			<img css={styles.image} src={"https://images.adsttc.com/media/images/5a95/95a7/f197/cc10/a800/004b/newsletter/Exterior6.jpg?1519752609"} />
			<div css={styles.header}>Town House in Dumbo</div>
			<div css={[styles.left10, styles.gray]}>3 Bed · 4 Bath</div>
			<div css={[styles.left10, styles.gray]}>New York, NY 22222</div>
			<div css={styles.bottomWrapper}>
				<div>
					<div css={styles.gray}>Each pays</div>
					<div css={styles.price}>$3000/month</div>
				</div>
				<div>
					<div css={styles.number}>8</div>
					<div css={styles.matches}>matches</div>
				</div>
			</div>
		</div>
	);
}
