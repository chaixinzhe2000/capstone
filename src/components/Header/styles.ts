import { css } from "@emotion/react";
import { BLACK, DARK_GRAY, GRAY, TEAL } from "../../colors";

export const headerWrapper = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 97px;
	border-bottom: 1px solid ${GRAY};
	position: relative;
	label: headerWrapper;
`

export const logo = css`
	text-transform: uppercase;
	font-family: 'Bubblegum Sans', cursive;
	font-size: 45px;
	color: ${TEAL};
	display: flex;
	align-items: center;
	text-decoration: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	label: logo;
`

export const logoImg = css`
	width: 45px;
	margin-left: 7px;
	label: logoImg;
`

export const link = css`
	font-family: 'DM Sans', sans-serif;
	text-decoration: none;
	color: ${DARK_GRAY};
	font-size: 18px;

	:hover {
		color: ${BLACK};
	}

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