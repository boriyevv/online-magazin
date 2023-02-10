import React from 'react'
import CartList from '../components/CartList'
import Header from '../components/Header'

const Cart = () => {
    return (
        <div className="cart-wrapper">
            <Header />
            <CartList />
        </div>
    )
}

export default Cart