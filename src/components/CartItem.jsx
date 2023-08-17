import React from 'react'

// The card that displays in the Cart page for each item in the cart. Receives the product information and the removeFromCart function as parameters.
const CartItem = ({ product, removeFromCart }) => {
  return (
    <div className='cartItem'>
        <div className='cartItemPic'>
            <img src={product.img} alt={product.name} />
        </div>
        <div className='autoMargin'>
            <span className='bigger'>{product.name}</span> <br />
            {/* Converts the product's price (stored as an integer) to a dollar value in CAD. */}
            <span className='big'>{(product.price/100).toLocaleString('en-US', {
                style:"currency",
                currency:"CAD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</span> <br />
            {/* Changes the stock message and colour depending on the product's stock. */}
            {product.stock === "in" ? <span style={{color: "green", fontSize: "small"}}>In stock</span> : <span style={{color: "maroon", fontSize: "small"}}>Almost gone</span>} <br />
        </div>
        {/* The remove button which displays in the upper right corner of the card. When clicked, the specific card is removed, and the corresponding product is removed from the cart list. */}
        <button className='remove' onClick={removeFromCart}>Remove</button>
    </div>
  )
}

export default CartItem