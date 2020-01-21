import React, { useState } from 'react';
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
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const addItem = item => {
		setCart([...cart, item]);
	};
	console.log(products);
	console.log(cart);
	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider>
					<Navigation cart={cart} />
					{/* Routes */}
					<Route exact path="/" component={Products}/>
					<Route path="/cart" render={() => <ShoppingCart cart={cart} />}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
