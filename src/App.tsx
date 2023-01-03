/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Button, CssVarsProvider } from '@mui/joy';
import React from 'react';
import { Renter } from './components';
import * as styles from './styles'

const App = () => {
	return (
		<React.Fragment>
			<Button variant="solid">Hello World</Button>
			<div css={styles.headerWrapper}>
				hello hello this is proof css works
			</div>
			<Renter />
		</React.Fragment>
	);
}

export default App;
