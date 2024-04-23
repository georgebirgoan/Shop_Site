import React,{createContext,useContext,useEffect, useState} from 'react';


//we use api to have products
import { getProducts } from '../services/api';


//create context from entire app
export const ProductsContext=createContext();


//create provider for all components
const ProductsContextProvider=({children})=>{
    const [products,setProducts]=useState([]);

    useEffect(()=>{
    const fetchProducts=async ()=>{
        setProducts(await getProducts());
        console.log("products in context prov",products);
    }
    fetchProducts();
    },[])
    //deps [] effect just once,not render infinite
    return(
        //set provider for all components with products
    <ProductsContext.Provider value={products}>
            {children}
    </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;


