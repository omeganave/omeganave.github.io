import React from 'react'

const ProductCard = ({ image, alt }) => {
  return (
    <div className='product'>
        <img src={image} alt={alt} />
    </div>
  )
}

export default ProductCard