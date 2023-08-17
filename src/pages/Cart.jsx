import React, { useContext } from 'react'
import HeaderButton from '../components/HeaderButton'
import shopper from '../images/shopper.png'
import Context from '../context/Context'
import CartItem from '../components/CartItem'

// The Cart page. Displays all items that are in the cart, as well as the subtotal. There is also a link to the Checkout, but we ran out of time to add the Checkout page.
const Cart = () => {

  // Getting the cart list and removeFromCart function from the context file.
  const { cart, removeFromCart } = useContext(Context);

  // Calculating the subtotal of all items in the cart.
  const calculateTotal = () => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return totalPrice;
  };

  const total = calculateTotal();

  // Handling using the removeFromCart function.
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className='cartContainer'>
      
        {/* If there is nothing in the cart, an image and some text will display. Otherwise, a CartItem component is displayed for every product in the cart. */}
        {cart.length === 0 ? <div className='topDiv'>
        <img src={shopper} alt="Shopper" /> 
        <p>
          <span className='bold'>Your Cart is empty</span> <br />
            Why don't you check <br />
            out our store.
        </p>
        </div> : 
        cart.map((item) => (
          <CartItem product={item} removeFromCart={() => handleRemoveFromCart(item.id)} key={item.id} />
        ))}
       
       {/* If nothing is in the cart, just the checkout button is displayed. This button currently does nothing, but if it did, it would be darkened and unclickable if nothing is in the cart. If there are products in the cart, the subtotal is displayed as well. */}
      <div className='bottomDiv'>
        {cart.length === 0 ? <HeaderButton text="Checkout" classes="headerButton yellow"/> : 
        <><span>Subtotal ({cart.length} item{cart.length >= 2 ? 's' : ''}): 
        {/* Converts subtotal integer to a CAD dollar value. */}
        {(total/100).toLocaleString('en-US', {
          style:"currency",
          currency:"CAD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
      })}</span><HeaderButton text="Checkout" classes="headerButton yellow"/></>}
        
      </div>
    </div>
  )
}

export default Cart