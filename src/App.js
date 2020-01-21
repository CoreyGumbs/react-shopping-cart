import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Context Providers
import {ProductContext} from './contexts/ProductContexts';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const addItem = item => {
		setCart([...cart, item]);
	};
	console.log(products);
	console.log(cart);
	return (
		<div className="App">
			<Navigation cart={cart} />
			<ProductContext.Provider value={{products, addItem}}>
			{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>
			</ProductContext.Provider>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
		</div>
	);
}

export default App;
