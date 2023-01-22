import { css } from "@emotion/react";
import { GRAY, TEAL } from "../../colors";

export const wrapper = css`
	border: 1px solid ${GRAY};
	min-width: 365px;
	min-height: 230px;
	border-radius: 10px;
	padding: 20px 25px;
	font-family: 'DM Sans', sans-serif;
`

export const image = css`
	width: 72px;
	height: 72px;
	object-fit: cover;
	border-radius: 100%; 
`

export const nameAndDescription = css`
	margin-left: 20px;
`

export const topWrapper = css`
	display: flex;
`

export const name = css`
	font-weight: 600;
	margin-bottom: 2px;
`

export const description = css`
	line-height: 18px;
`

export const propertyTitle = css`
	font-weight: 600;
	margin-bottom: 10px;
`

export const content = css`
	margin-bottom: 10px;
	color: ${TEAL};
`

export const bottomWrapper = css`
	display: flex;
	gap: 20px;
	margin-top: 15px;
`

export const left = css`
`

export const right = css`
	width: 240px;
`

export const footer = css`
	display: flex;
	justify-content: space-between;
	color: ${TEAL};
	font-weight: 600;
	margin-top: 15px;
`