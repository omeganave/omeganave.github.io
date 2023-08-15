import React from 'react'
import cart from '../images/cart.png'
import { Link } from 'react-router-dom'

const CartButton = () => { 
/*Simply returns a Link which contains a cart image. The Link is directed to the cart page.*/
  return (
    <Link to="/cart" className='cartLink'>
        <img src={cart} alt="Cart" className='cart'/> 
    </Link>
  )
}

export default CartButton