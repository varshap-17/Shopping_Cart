import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ onProductUpdated }) {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [onProductUpdated]); // Re-fetch when product is updated

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/shopping');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/shopping/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleUpdate = async (updatedProduct) => {
        try {
            await axios.put(`http://localhost:8080/api/v1/shopping/${updatedProduct.product_id}`, updatedProduct);
            setEditingProduct(null);
            onProductUpdated(); // Notify parent component
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ProductID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.product_id}>
                            {editingProduct && editingProduct.product_id === product.product_id ? (
                                <>
                                    <td>{product.product_id}</td>
                                    <td><input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} /></td>
                                    <td><input type="number" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })} /></td>
                                    <td><input type="text" value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} /></td>
                                    <td><input type="text" value={editingProduct.category} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })} /></td>
                                    <td><input type="number" value={editingProduct.stockQuantity} onChange={(e) => setEditingProduct({ ...editingProduct, stockQuantity: e.target.value })} /></td>
                                    <td>
                                        <button onClick={() => handleUpdate(editingProduct)}>Save</button>
                                        <button onClick={() => setEditingProduct(null)}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{product.product_id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td>{product.stockQuantity}</td>
                                    <td>
                                        <button onClick={() => handleEdit(product)}>Edit</button>
                                        <button onClick={() => handleDelete(product.product_id)}>Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;