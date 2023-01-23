import { css } from "@emotion/react";

export const wrapper = css`
	width: 60vw;
	height: calc(100vh - 98px);
	font-family: 'DM Sans', sans-serif;
	padding: 20px 30px;
`

export const header = css`
	font-size: 25px;
`

export const grid = css`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	column-gap: 25px;
	row-gap: 20px;
`