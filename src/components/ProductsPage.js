import React from 'react';
import ProductList from './ProductList';

function ProductsPage({ onProductUpdated }) {
    return (
        <div>
            <ProductList onProductUpdated={onProductUpdated}/>
        </div>
    );
}

export default ProductsPage;