import { useState, useEffect } from 'react'

// A custom hook to fetch products from the json-server.
const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error)
            });
    }, []);
  return { products, loading, error }
}

export default useFetchProducts