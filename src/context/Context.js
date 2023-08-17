import { createContext, useState, useEffect } from "react";
import useFetchProducts from "../hooks/useFetchProducts";

const Context = createContext();

export const Provider = ({ children }) => {

    // Uses a custom hook to get the products list from the json-server, as well as how to handle loading and errors.
    const { products, loading, error } = useFetchProducts();

    // THE PREVIOUS METHOD OF FETCHING DATA FROM THE JSON-SERVER, BEFORE USING A HOOK.
    // /* Sets the available products. */
    // const [products, setProducts] = useState([]);

    // /* Sets products by fetching them from db.json */
    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then((response) => response.json())
    //         .then((data)=>setProducts(data));
    // }, []);

    // Setting up the cart.
    const [cart, setCart] = useState([]);

    // Getting the cart from local storage, if it is available.
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        if (storedCart) {
            setCart(storedCart);
        };
    }, []);

    // Updating the local storage whenever the cart is updated.
    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    // Function to handle adding products to the cart.
    const addToCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            updateLocalStorage(updatedCart);
            return(updatedCart);
        });
    };

    // Function to handle removing products from the cart.
    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            const indexToRemove = updatedCart.findIndex((product) => product.id === productId);

            if (indexToRemove !== -1) {
                updatedCart.splice(indexToRemove, 1);
            }
            updateLocalStorage(updatedCart);
            return updatedCart;
        });
    };

    return (
        <Context.Provider
            value={{
                products,
                loading,
                error,
                cart,
                addToCart,
                removeFromCart
            }}>
                {children}
        </Context.Provider>
    );
};

export default Context;