import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ onProductAdded }) {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        category: '',
        stockQuantity: 0,
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/v1/shopping', product);
            onProductAdded(); // Callback to refresh product list
            setProduct({ name: '', price: 0, description: '', category: '', stockQuantity: 0 }); // Reset form
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} />
                <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} />
                <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={product.stockQuantity} onChange={handleChange} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;