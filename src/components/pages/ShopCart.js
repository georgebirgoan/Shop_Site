//here we defined each product with details like
//title,image,price,quantity,and state with add or delete

//we get data as props from Cart(parent)
import React, { useContext } from "react";
import {CartContext} from "../../context/CartContextProvider";
import Styles from "../style/ShopCart.module.css";
import { shorten } from "../../helper/functions";
import trash from "../../assets/icons/trash.png";

//here we defined each product

const ShopCart = ({ data }) => {
  const { title, price, quantity, image } = data;
  const { dispatch } = useContext(CartContext);
  return (
    <div className={Styles.container}>
      <img className={Styles.productImage} src={image} alt={title} />
      <div className={Styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>

      {/*cantitate */}
      <div>
        <span className={Styles.quantity}>{quantity}</span>
      </div>

      <div className={Styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}>
            <img src={trash} alt={title} style={{ width: "20px" }} />
          </button>
        )}
        <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
          +
        </button>
      </div>
    </div>
  );
};

export default ShopCart;