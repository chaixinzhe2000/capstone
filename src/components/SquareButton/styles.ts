import { css } from "@emotion/react";

export const buttonWrapper = ({selected, fontWeight, color, altColor, backgroundColor, hoverBackgroundColor, borderColor}: {selected: boolean, fontWeight: string, color: string, altColor: string, backgroundColor: string, hoverBackgroundColor: string, borderColor: string}) => css`
    border-radius: 10px;
    font-weight: ${fontWeight};
    text-align: center;
    border: solid 1px ${borderColor};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: ${selected? altColor: color};
    background-color: ${selected? backgroundColor: altColor};
    &:hover {
        ${selected === false &&
            `
                background-color: ${hoverBackgroundColor};
                cursor: pointer;
            `
        }
        ${selected === true &&
            `cursor: default;`
        }
        
`