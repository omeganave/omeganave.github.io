import React from 'react'
import HeaderButton from '../components/HeaderButton'
import shopper from '../images/shopper.png'

const Cart = () => {
  /* The Cart page. Returns two divs, the top displaying what is in the cart (NOT WORKING YET) and the bottom displaying a checkout button (WHICH WILL LINK TO A CHECKOUT PAGE) */
  return (
    <div className='cartContainer'>
      <div className='topDiv'>
        {/* Empty cart. Currently all that displays. */}
        <img src={shopper} alt="Shopper" /> 
        <p><span className='bold'>Your Cart is empty</span> <br />
            Why don't you check <br />
            out our store.
        </p>
      </div>
      <div className='bottomDiv'>
        {/* Contains a checkout button. Will link to a checkout page. Might also contain totals? */}
        <HeaderButton text="Checkout" classes="headerButton yellow"/>
      </div>
    </div>
  )
}

export default Cart