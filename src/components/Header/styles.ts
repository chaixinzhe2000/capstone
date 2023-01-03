import { css } from "@emotion/react";
import { gray } from "../../colors";

export const headerWrapper = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 97px;
	border-bottom: 1px solid ${gray};
	label: headerWrapper;
`

export const logo = css`
	text-transform: uppercase;
	font-family: 'Bubblegum Sans', cursive;
	label: logo;
`

export const link = css`
	font-family: 'DM Sans', sans-serif;
	label: link;
`

export const leftWrapper = css`
	display: flex;
	gap: 40px;
	margin-left: 30px;
	label: leftWrapper;
`

export const rightLink = css`
	margin-right: 30px;
	label: rightLink;
`