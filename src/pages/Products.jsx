import React from 'react';
import ProductCard from '../components/ProductCard';
import soap from "../images/soap.png"

const Products = () => {
  return (
    <div className='productGrid'>
      {/* Make this a for loop when you have the JSON server set up! */}
      <ProductCard image={soap} alt="Soap"/>
      <ProductCard image={soap} alt="Soap"/>
      <ProductCard image={soap} alt="Soap"/>
      <ProductCard image={soap} alt="Soap"/>
      <ProductCard image={soap} alt="Soap"/>
      <ProductCard image={soap} alt="Soap"/>
      <ProductCard image={soap} alt="Soap"/>
      <ProductCard image={soap} alt="Soap"/>
    </div>
  )
}

export default Products