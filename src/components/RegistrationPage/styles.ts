import { css } from "@emotion/react";
import { TEAL, LIGHT_TEAL, BRIGHT_TEAL } from "../../colors";

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
    font-size: 4vw;
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
    width: 55vw;
    background-color: ${TEAL};
    font-size: 20px;
    font-weight: 400;
    color: white;
    padding-left: 60px;
    padding-right: 200px;
    padding-top: 45px;
    padding-bottom: 45px;
`

export const rightSideFirstLine = css`
    display: flex;
    align-items: center;
`

export const buttonWrapper = css`
    margin-left: 20px;
`

export const horizontalBar = css`
    border: solid 1px ${LIGHT_TEAL};
    margin-top: 25px;
    margin-bottom: 25px;
`

export const tenPointScaleWrapper = css`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

export const tenPointScaleEnd = css`
    color: ${BRIGHT_TEAL};
    font-weight: 500;
`

export const tenPointScale = css`
    display: flex;
    justify-content: space-between;
`

export const tenPointScaleChoice = ({selected}: {selected: boolean}) => css`
    display: flex;
    align-items: center;
    border-radius: 90px;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    width: 2vw;
    height: 2vw;
    justify-content: center;
    ${selected === true && 
        `
        cursor: default;
        background-color: white;
        color: ${TEAL};
        `
    }
    &:hover {
        ${selected === false && 
            `
            background-color: ${LIGHT_TEAL};
            cursor: pointer;
            `
        }
        ${selected === true && 
            `
            cursor: default;
            `
        }
    }
`

export const textInputWrapper = css`
    width: 60%;
    margin-top: 10px;
`

export const textInput = css`
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: white;
    ::placeholder {
        color: rgba(255,255,255,0.6)
    }
    :focus {
        outline: none;
    }
    padding: 0px;
    width: 100%;
`

export const textInputHorizontalBar = css`
    border: solid 1px white;
    margin-top: 10px;
    margin-bottom: 25px;
`

export const submitButtonWrapper = css`
    width: 200px;
    margin-top: 35px;
`
export const dropdown = css`
    width: 150px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-left: -4px;
`

export const dropdownWrapper = css`
    margin-top: 10px;
    margin-bottom: 20px;
`