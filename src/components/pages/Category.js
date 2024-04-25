import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContextProvider";
import Styles from "../style/Category.module.css";
import Product from "./Product";


const Category = () => {
        const params=useParams();
        const category =params.category;
        //obtine produse categorie dupa alegere
        console.log("categoria",category);
        console.log("useParams",params);
        const data=useContext(ProductsContext);
        const products =data.filter((item)=> item.category === category);
        console.log("produse categorie aleasa",products);
        
        //afisare date dupa filtrare 
        return(
        <div className={Styles.container}>
        
            {products.map((item)=>(
                <Product key={item.id} productData={item}/>
            ))}
        
        </div>
        );
    }
    


    export default Category;