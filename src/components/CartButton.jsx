import React from 'react'
import cart from '../images/cart.png'
import { Link } from 'react-router-dom'

const CartButton = () => {
  return (
    <Link to="/cart" className='cartLink'>
        <img src={cart} alt="Cart" className='cart'/> 
    </Link>
  )
}

export default CartButton