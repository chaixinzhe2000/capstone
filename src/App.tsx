/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, ListingPage, RenterPage, RegistrationPage } from './components';
import * as styles from './styles'

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/listings" element={<ListingPage />} />
					<Route path="/find-match" element={<RenterPage />} />
					<Route path="/" element={<RegistrationPage />} />
					<Route path="/register" element={<RegistrationPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
