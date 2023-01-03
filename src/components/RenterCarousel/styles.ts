import { css } from "@emotion/react";

export const heading = css`
	font-family: 'DM Sans', sans-serif;
	font-size: 25px;
	font-weight: 600;
	label: heading;
`

export const description = css`
	font-family: 'DM Sans', sans-serif;
	font-size: 15px;
	margin-top: 5px;
	label: description;
`

export const scrollWrapper = css`
	display: flex;
	overflow-x: scroll;
	width: 100%;
	gap: 14px;
	margin-top: 15px;
	padding-bottom: 11px;

	::-webkit-scrollbar {
		display: none;
	}
`

export const wrapper = css`
	margin-bottom: 18px;

`