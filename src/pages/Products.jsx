import React, { useContext, useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Context from '../context/Context';
import { useLocation } from 'react-router-dom';

// The Products page. Lists the products in a grid layout, 4 products per row.
const Products = () => {
  
  // Gets the products list, loading and error from the context file.
  const { products, loading, error } = useContext(Context);

  
  const location = useLocation();
  // Gets the search query from the URL search parameter from the search bar.
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');

  // A filtered list of products, based on the search query.
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filling the filteredProducts list.
  useEffect(() => {
    // If there is a search query, filters through the products list and, if the product name contains the search query, it is added to the filteredProducts list. Otherwise, the filteredProducts is just set to be equal to the products list.
    if (searchQuery) {
      const lowercaseSearchQuery = searchQuery.toLowerCase();
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(lowercaseSearchQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products)
    }
  }, [searchQuery, products])

  // If the page is loading, displays a loading message (doesn't have any styling applied, since it is visible for a fraction of a second, if ever).
  if (loading) {
    return <p>loading...</p>
  }

  // Displays an error if there is an error in fetching information from the json-server.
  if (error) {
    return <p>error: {error.message}</p>
  }

  return (
    <div className='productGrid'>

      {/* If there is a search query, and it doesn't match any product, a "Sorry" message is displayed. Otherwise, a ProductCard component is displayed for each filtered product. */}
      {filteredProducts.length === 0 ? <div className='nothing'>Sorry we couldn't find what<br />you're looking for.
      </div> : <>
      {filteredProducts.map((item) => (
        <ProductCard image={item.img} alt={item.name} key={item.id} id={item.id} />
      ))}
      </>}
      

    </div>
  )
}

export default Products