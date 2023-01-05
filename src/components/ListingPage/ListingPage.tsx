/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { style } from '@mui/system';
import { ListingDisplay } from '../ListingDisplay';
import { Maps } from '../Maps';
import * as styles from './styles'

export const ListingPage = () => {
	return (
		<div css={styles.pageWrapper}>
			<ListingDisplay />
			<Maps />
		</div>
	);
}