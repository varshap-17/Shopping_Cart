import React from 'react';
import ProductForm from './ProductForm';

function AddProductPage({ onProductAdded }) {
    return (
        <div>
            <ProductForm onProductAdded={onProductAdded} />
        </div>
    );
}

export default AddProductPage;