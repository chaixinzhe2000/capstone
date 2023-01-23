import { css } from "@emotion/react";
import { GRAY, LIGHT_GRAY } from "../../colors";

export const wrapper = css`
	border: 1px solid ${GRAY};
	min-width: 250px;
	min-height: 285px;
	border-radius: 10px;
`

export const header = css`
	margin-top: 10px;
	margin-left: 15px;
	font-weight: 700;
`

export const image = css`
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	height: 135px;
	object-fit: cover;
`

export const bottomWrapper = css`
	display: flex;
	margin-top: 25px;
	justify-content: space-between;
	margin-right: 15px;
	margin-left: 15px;
`

export const gray = css`
	color: ${LIGHT_GRAY};
	font-size: 14px;
`

export const left10 = css`
	margin-left: 15px;
`