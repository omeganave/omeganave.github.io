import React from 'react'
import HeaderButton from '../components/HeaderButton'
import shopper from '../images/shopper.png'

const Cart = () => {
  return (
    <div className='cartContainer'>
      <div className='topDiv'>
        <img src={shopper} alt="Shopper" /> 
        <p><span className='bold'>Your Cart is empty</span> <br />
            Why don't you check <br />
            out our store.
        </p>
      </div>
      <div className='bottomDiv'>
        <HeaderButton text="Checkout" classes="headerButton yellow"/>
      </div>
    </div>
  )
}

export default Cart