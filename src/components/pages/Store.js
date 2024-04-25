//here we make the box for all products
import React, { useContext } from "react";
import Styles from '../style/Store.module.css'
import Product from "./Product";
import { ProductsContext } from "../../context/ProductsContextProvider";


const Store=()=>{
    const products=useContext(ProductsContext) //get data from context
    console.log("produse store ",products);
    return(
    <div className={Styles.container} >
    {
        products.map((item)=>(
        <Product key={item.id} productData={item} />
        ))
    }
    </div>
    );
}


export default Store;