/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { ListingCard, Renter } from './components';
import * as styles from './styles'

const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Registration</Link>
						</li>
						<li>
							<Link to="/listings">Listings</Link>
						</li>
						<li>
							<Link to="/find-match">Find Match</Link>
						</li>
					</ul>
				</nav>
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
