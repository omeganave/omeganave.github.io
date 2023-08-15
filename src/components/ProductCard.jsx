import React from 'react'

const ProductCard = ({ image, alt}) => {
    /* Returns a card for a product. Simply shows an image to represent the product. WILL HAVE TO CHANGE TO A LINK ELEMENT LATER. */
  return (
    <div className='product'>
        <img src={image} alt={alt} />
    </div>
  )
}

export default ProductCard