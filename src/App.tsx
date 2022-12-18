/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Button, CssVarsProvider } from '@mui/joy';
import * as styles from './styles'

const App = () => {
	return (
		<CssVarsProvider>
			<Button variant="solid">Hello World</Button>
			<div css={styles.headerWrapper}>
				hello hello this is proof css works
			</div>
		</CssVarsProvider>
	);
}

export default App;
