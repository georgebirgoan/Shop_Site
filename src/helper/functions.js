export const shorten = (title) => {
    const splitedTitle = title.split(" ");
    if (splitedTitle[1] === "-") {
      return `${splitedTitle[0]} ${splitedTitle[2]}`;
    } else {
      return `${splitedTitle[0]} ${splitedTitle[1]}`;
    }
  };




//!! este numit operator de dublă negare sau de conversie la valoare booleană.

export const isInCart = (state,id)=>{
    //convert rez to boolean value,true if find
    const result=!!state.selectedItem.find((item)=> item.id === id);
    return result
}



//nr de produse in cos la  starea curenta,daca se gasesc returneaza cantitatea
export const itemCount=(state,id)=>{
    const index=state.selectedItem.findIndex((item)=>
     item.id === id);

    if(index === -1){
        return false;
    }else{
        return state.selectedItem[index].quantity
    }


}