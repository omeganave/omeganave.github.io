import { createContext, useState, useEffect } from "react";

const Context = createContext();

export const Provider = ({ children }) => {

    /* Sets the available products. */
    const [products, setProducts] = useState([]);

    /* Sets products by fetching them from db.json */
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data)=>setProducts(data));
    }, []);

    /* MORE TO COME */






    return (
        <Context.Provider
            value={{
                products
            }}>
                {children}
        </Context.Provider>
    );
};

export default Context;