/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom';
import * as styles from './styles'

export const Header = () => {
	return (
		<div css={styles.headerWrapper}>
			<div css={styles.leftWrapper}>
				<Link to="/listings" css={styles.link}>
					Browse Rentals
				</Link>
				<Link to="/find-match" css={styles.link}>
					Find Roommates
				</Link>
			</div>
			<Link to="/" css={styles.logo}>
				Kopa
				<img src="../../../img/logo.svg" css={styles.logoImg} />
			</Link>
			<div css={[styles.rightLink, styles.link]}>
				Account
			</div>
		</div>
	);
}