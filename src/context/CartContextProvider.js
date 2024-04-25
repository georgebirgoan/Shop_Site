import React,{ createContext, useReducer } from "react";

//here we have context inside the cart

//reduce(acc,val)->to make sum for products
//push-->to put element in array
//filter->remove element from array

const initialState={
    selectedItem:[],
    itemsCounter:0,
    total:0,
    checkout:false
}

//number of products and total price
const sumItem=(items)=>{
    const itemsCounter=items.reduce((total,product)=>total + product.quantity,0)
    const total=items.reduce((total,product)=>total + product.price * product.quantity,0)
    .toFixed(2);
    return {total,itemsCounter};
}



const cartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItem.find((item)=>item.id === action.payload.id)){
                state.selectedItem.push({...action.payload,quantity:1});   
            }
            
            //actualizare stare cos cu produs nou,sum,check 
            return{
                ...state,selectedItem:[...state.selectedItem],
                ...sumItem(state.selectedItem),
                checkout:false
            }
        case "REMOVE_ITEM":
            //new array with products that are not equal id
            const newSelectedItems= state.selectedItem.filter(
                (item)=> item.id !== action.payload.id
            )

            return{
                ...state,selectedItem:[...newSelectedItems],
                ...sumItem(newSelectedItems)
            }

            case "INCREASE":
                const updatedSelectedItem = state.selectedItem.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return {
                    ...state,
                    selectedItem: updatedSelectedItem,
                    ...sumItem(updatedSelectedItem),
                };
            

        case "DECREASE":
        const IndexD=state.selectedItem.findIndex((item)=>
            item.id === action.payload.id
        );
        state.selectedItem[IndexD].quantity--; 
        return{
            ...state,
            ...sumItem(state.selectedItem),
        };

        case "CLEAR":
            return {
              selectedItem: [],
              itemsCounter: 0,
              total: 0,
              checkout: false,
            };
        case "CHECKOUT":
            return {
            selectedItem: [],
            itemsCounter: 0,
            total: 0,
            checkout: true,
        };
    default:return state;

    }



}


//state cart for entire app 
  export const CartContext=createContext();
 

  const CartContextProvider=({children})=>{
      const [state,dispatch]=useReducer(cartReducer,initialState);
      
      return(
      <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
      )
}


  export default CartContextProvider;