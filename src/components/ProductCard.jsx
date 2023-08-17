import React from 'react'
import { Link } from 'react-router-dom'

// The card that displays for each product on the Products page. Accepts the image src, alt text and the product's id as parameters.
const ProductCard = ({ image, alt, id }) => {
  return (
    <div className='product'>
        {/* Links to a /product page depending on the product id */}
        <Link to={`/product/${id}`}>
            <img src={image} alt={alt} />
        </Link>
    </div>
  )
}

export default ProductCard