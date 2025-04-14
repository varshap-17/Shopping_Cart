import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/shopping/${productId}`); 
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    console.log(product);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p className="description-text">Price: ${product.price}</p>
            <p className="description-text">Description: {product.description}</p>
            <p className="description-text">Category: {product.category}</p>
            <p className="description-text">Stock: {product.stockQuantity}</p>
            <button onClick={() => navigate(-1)}>Back to Products</button>
        </div>
    );
}

export default ProductDetails;