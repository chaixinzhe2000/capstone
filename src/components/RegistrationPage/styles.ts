import { css } from "@emotion/react";
import { TEAL } from "../../colors";

export const pageWrapper = css`
	display: flex;
    height: calc(100vh - 98px);
    font-family: 'DM Sans', sans-serif;
`
export const leftSide = css`
    width: 50vw;
    background-color: white;
`

export const leftSideItems = css`
    margin-top: 13vh;
`

export const leftTitle = css`
    font-weight: bold;
    font-size: 4.3vw;
    color: ${TEAL};
    text-align: center;
`

export const leftAsset = css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    height: auto;
`

export const rightSide = css`
    width: 50vw;
    background-color: ${TEAL};
    font-size: 24px;
    font-weight: 500;
    color: white;
    padding-left: 40px;
    padding-top: 30px;
`

export const rightSideFirstLine = css`
    display: flex;
    align-items: center;
`

export const buttonWrapper = css`
    margin-left: 10px;
    margin-right: 10px;
`