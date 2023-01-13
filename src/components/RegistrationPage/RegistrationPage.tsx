/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Dispatch, SetStateAction, useState } from 'react';
import { ORANGE, TEAL } from '../../colors';
import { RenterCarousel } from '../RenterCarousel';
import { UserType } from '../../types'
import { SquareButton } from '../SquareButton';
import * as styles from './styles'

export const RegistrationPage = () => {
	const [userType, setUserType] = useState('');
	const renderForm = () => {
		if (userType == "RENTER") {
			return (
				<div>
					hi
				</div>
			)
		} else if (userType == "LANDLORD") {
			return (
				<div>
					bi
				</div>
			)
		}
	}
	return (
		<div css={styles.pageWrapper}>
			<div css={styles.leftSide}>
				<div css={styles.leftSideItems}>
					<div css={styles.leftTitle}>
						Start Kopa<span style={{color: ORANGE}}>'</span>ing!
					</div>
					<img css={styles.leftAsset} src="../../../img/registration-page-asset.png" alt="Roommates Living Together Cartoon" />
				</div>
			</div>
			<div css={styles.rightSide}>
				<div css={styles.rightSideFirstLine}>
					<div>
						I'm a
					</div>
					<div css={styles.buttonWrapper}>
						<SquareButton text={'Renter'} fontWeight={'700'} color={'white'} altColor={TEAL} backgroundColor={'white'} selected={userType=="RENTER"} onClick={() => {setUserType("RENTER")}}/>
					</div>
					<div css={styles.buttonWrapper}>
						<SquareButton text={'Landlord'} fontWeight={'700'} color={'white'} altColor={TEAL} backgroundColor={'white'} selected={userType=="LANDLORD"} onClick={() => {setUserType("LANDLORD")}}/>
					</div>
				</div>
				{renderForm()}
			</div>
		</div>
	);
}