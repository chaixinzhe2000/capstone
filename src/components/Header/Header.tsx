/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export const Header = () => {
	return (
		<div css={styles.headerWrapper}>
			<div css={styles.leftWrapper}>
				<div css={styles.link}>
					Browse Rentals
				</div>
				<div css={styles.link}>
					Find Roommates
				</div>
			</div>

			<div css={styles.logo}>
				Kopa
			</div>
			<div css={[styles.rightLink, styles.link]}>
				Account
			</div>
		</div>
	);
}