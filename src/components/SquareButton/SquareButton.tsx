/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as styles from './styles'

export interface SquareButtonProps {
    text: string;
    fontWeight: string;
    color: string;
    altColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    borderColor: string;
    selected: boolean;
    onClick: any;
}

export const SquareButton = (props: SquareButtonProps) => {
    const {text, fontWeight, color, altColor, backgroundColor, hoverBackgroundColor, borderColor, selected, onClick} = props
    return (
        <div css={styles.buttonWrapper({selected, fontWeight, color, altColor, backgroundColor, hoverBackgroundColor, borderColor})} onClick={onClick}>
            {text}
        </div>
    )
}