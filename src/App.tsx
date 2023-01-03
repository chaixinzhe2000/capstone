/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Header, ListingCard, ListingPage, Renter, RenterPage } from './components';
import * as styles from './styles'

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/listings" element={<ListingPage />} />
					<Route path="/find-match" element={<RenterPage />} />
					<Route path="/" element={<ListingCard />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
