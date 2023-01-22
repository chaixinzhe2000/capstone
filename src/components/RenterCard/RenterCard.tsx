/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export interface IRenterCard {
	renterImg: string
	name: string
	description: string
	stayDuration: string
	occupation: string
	matchedProperties: string[]
	preferences: string[]
}

export const RenterCard = (props: IRenterCard) => {

	const { renterImg, name, description, stayDuration, occupation, matchedProperties, preferences } = props

	return (
		<div css={styles.wrapper}>
			<div css={styles.topWrapper}>
				<img src={renterImg} css={styles.image} />
				<div css={styles.nameAndDescription}>
					<div css={styles.name}>{name}</div>
					<div css={styles.description}>{description}</div>
				</div>
			</div>
			<div css={styles.bottomWrapper}>
				<div css={styles.left}>
					<div css={styles.propertyTitle}>Stay duration</div>
					<div css={styles.propertyTitle}>Occupation</div>
					<div css={styles.propertyTitle}>Matched<br />properties</div>
				</div>
				<div css={styles.right}>
					<div css={styles.content}>{stayDuration}</div>
					<div css={styles.content}>{occupation}</div>
					<div css={styles.content}>{matchedProperties.map((property, idx) => {
						if (idx !== matchedProperties.length - 1) {
							return property + ", "
						} else {
							return property
						}
					})}</div>
				</div>
			</div>
			<div css={styles.footer}>
				<div>{preferences.map((preference, idx) => {
					if (idx !== preferences.length - 1) {
						return preference + ", "
					} else {
						return preference
					}
				})}</div>
				<img src="../../img/verified.svg" />
			</div>
		</div >
	);
}