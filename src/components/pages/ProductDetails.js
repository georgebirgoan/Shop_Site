import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
//useParams /products/23 show details about an specific product
//pt ca obiectele incep index de la 0 scadem 1 din id
import Styles from '../style/ProductDetails.module.css'
import { ProductsContext } from "../../context/ProductsContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import { Rating } from "@mui/material";
import { isInCart, itemCount } from "../../helper/functions";
import trash from "../../assets/icons/trash.png"

//Logic for buttons

{/*Minus button if is > 1 */}
{/* if itemCount === 1 trash or + */}
{/*quantity */}
{/*exista deja ?  + nu exista Add to cart  */}



const ProductDetails=()=>{
    const params=useParams();
    const id=params.id -1 ;
    const data=useContext(ProductsContext);
    const product=data[id];
    const {title,price,category,description,image,rating}=product;
    const {rate}=rating;
    const {state,dispatch}=useContext(CartContext);


    return(
        <>
        {/*container for entire part */}
        <div className={Styles.container}>
            <img className={Styles.image} src={image} alt={title} />
        
            <div className={Styles.textContainer}>
                <h3>{title}</h3>
                <p className={Styles.description}>{description}</p>
                <p className={Styles.category}>Category:{category}</p>
                
                <Rating 
                name="half-rating"
                defaultValue={rate}
                precision={0.5}
                readOnly
                style={{marginBottom:"10px",marginLeft:"0px"}}
                />


            {/*buttons */}
            <div className={Styles.buttonContainer}>
                <span className={Styles.price}>{price}$</span>


            {/*cele 2 butoane jos dreapta */}
            <div className={Styles.buttonContainer}>
                
                {/*minus button */}
                {itemCount(state,product.id) > 1 && (
                        <button className={Styles.smallButton}
                        onClick={()=>
                        dispatch({type:"DECREASE",payload:product})                      
                        }
                        >
                         -               
                    </button>
                )}


                {/*Trash */}
                {itemCount(state,product.id) === 1 && (
                    <button className={Styles.smallButton}
                    onClick={()=>{
                        dispatch({type:"REMOVE_ITEM",payload:product})
                    }}
                    >
                        <img src={trash} alt={image}/>
                    </button>
                
                )}

                {/*itemCount return quantity*/}
                {itemCount(state,product.id) > 0 && (
                    <span className={Styles.counter}>{itemCount(state,product.id)}</span>
                )}
            
                {/*Plus or add to cart */}
                {isInCart(state,product.id) ? (
                    <button className={Styles.smallButton}
                    onClick={()=>
                    dispatch({type:"INCREASE",payload:product})
                    }
                    >
                    +    
                    </button>
                ):(
                    <button
                    onClick={()=>{
                        dispatch({type:"ADD_ITEM",payload:product})
                    }}
                    >
                        Add to cart
                    </button>
                )}
                
            </div>
            
            <Link to={"/product"}>Back to shop</Link>







        </div>
    </div>
</div>



       

        



    </>
    )

}



export default ProductDetails;