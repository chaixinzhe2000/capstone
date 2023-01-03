/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Header, ListingCard, Renter } from './components';
import * as styles from './styles'

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/listings" element={<ListingCard />} />
					<Route path="/find-match" element={<Renter />} />
					<Route path="/" element={<ListingCard />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
