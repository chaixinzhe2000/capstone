/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export const RenterCard = () => {
	return (
		<div css={styles.wrapper}>
			<div css={styles.topWrapper}>
				<img src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" css={styles.image} />
				<div css={styles.nameAndDescription}>
					<div css={styles.name}>Alex Swift</div>
					<div css={styles.description}>I love keyboards & I am always happy to make you coffee!</div>
				</div>
			</div>
			<div css={styles.bottomWrapper}>
				<div css={styles.left}>
					<div css={styles.propertyTitle}>Stay duration</div>
					<div css={styles.propertyTitle}>Occupation</div>
					<div css={styles.propertyTitle}>Matched<br />properties</div>
				</div>
				<div css={styles.right}>
					<div css={styles.content}>June 1</div>
					<div css={styles.content}>Medical Student</div>
					<div css={styles.content}>Avalon at Center Place, the 5th, via7 Apartements</div>
				</div>
			</div>
			<div css={styles.footer}>
				<div>ROBOTICS, TABLE TENNIS, SOCCER</div>
				<img src="../../img/verified.svg" />
			</div>
		</div>
	);
}