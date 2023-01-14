/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Dispatch, SetStateAction, useState } from 'react';
import { LIGHT_TEAL, ORANGE, TEAL } from '../../colors';
import { RenterCarousel } from '../RenterCarousel';
import { UserType } from '../../types'
import { SquareButton } from '../SquareButton';
import * as styles from './styles'
import { useNavigate } from 'react-router-dom';

export const RegistrationPage = () => {
	const [userType, setUserType] = useState('')
	const [cleanlinessRating, setCleanlinessRating] = useState('')
	const [partyRating, setPartyRating] = useState('')
	const navigate = useNavigate()
	const renderTenPointScale = (ratingUseStateVariable: any, setRatingUseStateVariable: any) => (
		[1,2,3,4,5,6,7,8,9,10].map((item, i) => 
			<div css={styles.tenPointScaleChoice({selected: ratingUseStateVariable==item})} onClick={() => setRatingUseStateVariable(item)}key={i}>
				{item}
			</div>
		)
	)
	const renderTextBox = (placeholder: string) => (
		<div css={styles.textInputWrapper}>
			<input css={styles.textInput} type="text" placeholder={placeholder} />
			<hr css={styles.textInputHorizontalBar}></hr>
		</div>
	)
	const renderForm = () => {
		if (userType == "RENTER") {
			return (
				<div>
					<div style={{marginTop: '25px'}}>
						Please provide this basic information to get started as a renter:
					</div>
					<hr css={styles.horizontalBar}></hr>
					<div>
						On a scale of 1 to 10, my cleanliness level is:
					</div>
					<div css={styles.tenPointScaleWrapper}>
						<div css={styles.tenPointScaleEnd}>
							Dirty
						</div>
						<div css={styles.tenPointScale}>
							{renderTenPointScale(cleanlinessRating, setCleanlinessRating)}
						</div>
						<div css={styles.tenPointScaleEnd}>
							Clean
						</div>
					</div>
					<hr css={styles.horizontalBar}></hr>
					<div>
						On a scale of 1 to 10, I party:
					</div>
					<div css={styles.tenPointScaleWrapper}>
						<div css={styles.tenPointScaleEnd}>
							No
						</div>
						<div css={styles.tenPointScale}>
							{renderTenPointScale(partyRating, setPartyRating)}
						</div>
						<div css={styles.tenPointScaleEnd}>
							Yes
						</div>
					</div>
					<hr css={styles.horizontalBar}></hr>
					<div>
						My interests include (5 max):
					</div>
					<div>
						{renderTextBox("Netflix, Coding, Cooking")}
					</div>
					<div>
						My day-to-day role is:
					</div>
					<div>
						{renderTextBox("Undergraduate Student")}
					</div>
					<div css={styles.submitButtonWrapper}>
						<SquareButton text={"Let's get started"} fontWeight={'600'} color={'white'} altColor={ORANGE} backgroundColor={ORANGE} hoverBackgroundColor={ORANGE} borderColor={ORANGE} selected={false} onClick={() => navigate('/listings')}/>
					</div>
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
						<SquareButton text={'Renter'} fontWeight={'600'} color={'white'} altColor={TEAL} backgroundColor={'white'} hoverBackgroundColor={LIGHT_TEAL} borderColor={'white'} selected={userType=="RENTER"} onClick={() => {setUserType("RENTER")}}/>
					</div>
					<div css={styles.buttonWrapper}>
						<SquareButton text={'Landlord'} fontWeight={'600'} color={'white'} altColor={TEAL} backgroundColor={'white'} hoverBackgroundColor={LIGHT_TEAL} borderColor={'white'} selected={userType=="LANDLORD"} onClick={() => {setUserType("LANDLORD")}}/>
					</div>
				</div>
				{renderForm()}
			</div>
		</div>
	);
} //#669397