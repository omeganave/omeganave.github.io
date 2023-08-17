import React, { useContext } from 'react'
import Context from '../context/Context'
import cartImg from '../images/cart.png'
import { Link } from 'react-router-dom'
import Badge from './Badge'

// The button that takes you to the Cart page.
const CartButton = () => { 
    // Uses the context file to get the products in the cart.
    const { cart } = useContext(Context);
  return (
    <div className='cartButtonContainer'>
    <Link to="/cart" className='cartLink'>
        <img src={cartImg} alt="Cart" className='cart'/> 
    </Link>
    {/* If the cart has something in it, the Badge component displays in the bottom right corner of the button. */}
    {cart.length >= 1 ? <Badge num={cart.length} /> : null}
    
    </div>
  )
}

export default CartButton