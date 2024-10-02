//DataProvider.jsx
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const URL = 'https://fakestoreapi.com/products'

const Context = createContext();

export const StoreDataProvider = ({children}) => {
    const [products, setProducts] = useState();

    useEffect( () => {
        const fetchProducts = async () => {
            try{

                const res = await fetch(URL);
                const data = await res.json();
                setProducts(data);
            } catch (error){
                console.error("Store Data not fetched!")
            }
        };
        fetchProducts();
        }, []);

    return (
        <Context.Provider value={products}>
            {children}
        </Context.Provider>
    );


};



export const useStoreData = () => useContext(Context)

/*
StoreDataObject {index, id, title, price, description, category, image, rating}
 */