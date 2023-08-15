import React from 'react';
import ProductCard from '../components/ProductCard';
// import soap from "../images/soap.png"
import Context from '../context/Context';
import { useContext } from 'react';

const Products = () => {
  /* Gets the products list from the Context file. */
  const { products } = useContext(Context);

  /* Returns all of the available products. */
  return (
    <div className='productGrid'>

      {/* Makes a product card for each product in the list. */}
      {products.map((item) => (
        <ProductCard image={item.img} alt={item.name} key={item.id}/>
      ))}

    </div>
  )
}

export default Products