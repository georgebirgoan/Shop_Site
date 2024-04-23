//aici se creeaza fiecare produs pt cumparaturi
import React,{ useContext } from 'react';
import Styles from '../style/Product.module.css'
import {Link, Rating} from '@mui/material';
import { CartContext } from '../../context/CartContextProvider';
import { isInCart, itemCount } from '../../helper/functions';
import trash from '../../assets/icons/trash.png'

//productData -->children from context that have all info from product
//in store we have all products
//here we describe each product with info


const Product=({productData})=>{
    const {id,title,price,category,image,rating}=productData; //destracture info from each product
    const {rate}=rating;
    const {state,dispatch}=useContext(CartContext);
    console.log(state);


    return(
        <div className={Styles.container}>
          <img
            className={Styles.cardImage}
           src={image}
           alt={title}
           style={{width:"240px"}}
          />
        
        <h3>{title}</h3>
        <p>{price}$</p>
        <p>Categoria:{category}</p>
        
        {/*Rating */}
        <Rating className='half-rating' defaultValue={rate} precision={0.5} readOnly/>

        
         {/*Details and add to cart */}
        <div className={Styles.linkContainer}>
        <Link to={`/products/${category}/${id}`}>Details</Link>

    
    <div className={Styles.buttonContainer}>
        {/*DECREASE */}
        {itemCount(state,id) > 1 && (
            <button
            className={Styles.smallButton}
            onClick={()=>
                dispatch({type:"DECREASE",payload:productData})
            }>
            -
            </button>  
        )}

        {/*trash */}
        {itemCount(state,id) === 1 && (
        <button className={Styles.smallButton}
        onClick={() =>
        dispatch({type:"REMOVE_ITEM",payload:productData})
            }>
        <img src={trash} alt="icon" style={{ width: "20px" }} />
        </button>
        )}


        {/*quntity of products */}
        {itemCount(state,id) > 0 && <span className={Styles.counter}>{itemCount(state,id)}</span>}

        {/*add to cart or increase */}
        {isInCart(state,id) ? (
            <button className={Styles.smallButton}
            onClick={()=>
            dispatch({type:'INCREASE',payload:productData})}>
            +
            </button>
            ):(
            <button
                onClick={()=>
                    dispatch({type:"ADD_ITEM",payload:productData})}>
                Add to cart
            </button>
                )}
            </div>
        </div>
    </div>
    )
}

export default Product;