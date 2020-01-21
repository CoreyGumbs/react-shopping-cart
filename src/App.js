import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Context Providers
import {ProductContext} from './contexts/ProductContexts';
import {CartContext} from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const initialCart = () => JSON.parse(window.localStorage.getItem('cart')) || [];
	const [products] = useState(data);
	const [cart, setCart] = useState(initialCart);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = id => {
		setCart(cart.filter(product => product.id !== id));
	};

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
		
	}, [cart]);

	console.log(JSON.parse(window.localStorage.getItem('cart')));
	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />
					{/* Routes */}
					<Route exact path="/" component={Products}/>
					<Route path="/cart" component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
