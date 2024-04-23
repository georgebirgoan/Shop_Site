//!! este numit operator de dublă negare sau de conversie la valoare booleană.

export const isInCart = (state,id)=>{
    //convert rez to boolean value,true if find
    const result=!!state.selectedItem.find((item)=> item.id === id);
    return result
}



//numara produse cos pt a stabili starea produsului,daca se gasesc returneaza cantitatea
export const itemCount=(state,id)=>{
    const index=state.selectedItem.findIndex((item)=> item.id === id);

    if(index === -1){
        return false;
    }else{
        return state.selectedItem[index].quantity
    }


}