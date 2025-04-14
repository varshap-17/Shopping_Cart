import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product_id}>
                                {item.name} - ${item.price}
                                <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ${calculateTotalPrice()}</p>
                </>
            )}
        </div>
    );
}

export default Cart;