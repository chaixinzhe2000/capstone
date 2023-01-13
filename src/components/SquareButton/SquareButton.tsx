import { useState } from 'react';
import * as styles from './styles'

export interface SquareButtonProps {
    text: string;
    fontWeight: string;
    color: string;
    altColor: string;
    backgroundColor: string;
    selected: boolean;
    onClick: any;
}

export const SquareButton = (props: SquareButtonProps) => {
    const { text, fontWeight, color, altColor, backgroundColor, selected, onClick } = props
    const staticStyle = {borderRadius: '10px', fontWeight: fontWeight, border: 'solid 1px ' + color, padding: '10px'}
    let conditionalStyle = {color: selected? altColor: color, backgroundColor: selected? backgroundColor: 'transparent'}
    return (
        <div css={styles.buttonWrapper} style={{...staticStyle, ...conditionalStyle}} onClick={onClick}>
            {text}
        </div>
    )
}