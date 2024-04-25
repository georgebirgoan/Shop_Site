import React, { useContext } from "react";
import CartContextProvider, { CartContext } from "../../context/CartContextProvider";
import ShopCart from "../pages/ShopCart";
import Styles from '../style/Cart.module.css'
import loading from '../../assets/icons/loading.png';
import { Link } from "react-router-dom";
//state este starea actuala a array-ului
//selectedItems is an Array of objects
//here we defined the top part:Totala items,payments,check out,clear


const Cart = () =>{
    const {state,dispatch}=useContext(CartContext);


    return(
    <>
    <div className={Styles.container}>
    
        <div className={Styles.cartContainer}>
            {state.selectedItem.map((item) => (
            <ShopCart key={item.id} data={item} />
            ))}
        </div>



        {/*acestea doua sunt facute in context */}
    {state.itemsCounter > 0 && (
        <div className={Styles.payments}>
            <p className={Styles.items}>
                <span>Items counter:</span>
                {state.itemsCounter}
            </p>

            <p className={Styles.amount}>
                <span>Amount:</span>
                {state.total} $
            </p>


        {/**chckout and clear */}
        <div className={Styles.buttonContainer}>
            <button className={Styles.checkout}
            onClick={()=>(
                dispatch({type:"CHECKOUT"})
            )} >
                Checkout
            </button>
            
            <button className={Styles.clear}
            onClick={()=>(
                dispatch({type:"CLEAR"})
            )}
            >
                Clear
            </button>

           </div>


        </div>
    )}


    {/*true  */}
    {(state.checkout) && (
        <div className={Styles.complete}>
            <img alt="loading" src={loading} style={{width:'100%'}}/>
            <p>Checkout Succesfully</p>
            <Link to="/products">Buy more</Link>
        </div>
    )}

    {/*back to shop */}
        {!state.checkout && state.itemsCounter === 0 && (
            <div className={Styles.complete}>
            <img src={loading} alt="tt" style={{ width: "100%" }} />
            <h3> Back to Shop </h3>
            <Link to="/products"> Go to shop</Link>
            </div>
        )}


      
    </div>

</>
)}

export default Cart;