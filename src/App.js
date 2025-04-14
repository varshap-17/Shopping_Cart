import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProductPage from './components/AddProductPage';
import ProductsPage from './components/ProductsPage';
import './App.css';

function App() {
    const [refresh, setRefresh] = useState(false);
    const [update, setUpdate] = useState(false);

    const handleProductAdded = () => {
        setRefresh(!refresh);
    };

    const handleProductUpdated = () => {
        setUpdate(!update);
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Add Product</Link>
                        </li>
                        <li>
                            <Link to="/products">Product List</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<AddProductPage onProductAdded={handleProductAdded} />} />
                    <Route path="/products" element={<ProductsPage onProductUpdated={handleProductUpdated} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;