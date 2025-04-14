import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleRemoveFromCart = (productToRemove) => {
        setCartItems(cartItems.filter((item) => item.product_id !== productToRemove.product_id));
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                         <li>
                            <Link to="/">Products</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
