import React from 'react';
import './Cart.css';

function Cart() {
    return (
        <div className="shoppping-container">
            <div className="counter-container">
                <span id="counter">1</span>
                <i data-feather='shopping-bag'></i>
            </div>
        </div>

    );
}

export default Cart;



