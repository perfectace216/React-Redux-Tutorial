import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<ProductListing />} />
				{/* Correct the dynamic route */}
				<Route exact path="/product/:productId" element={<ProductDetail />} />
			</Routes>
		</div>
	);
};

export default App;
