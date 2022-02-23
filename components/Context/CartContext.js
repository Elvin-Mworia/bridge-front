import {createContext,useReducer,useEffect} from 'react';
import {cartReducer} from "./cartReducer.js";

const initialState ={
    Items: [],
    Amount: 0,
    totalItems: 0,

}

 export const cartContext=createContext();
 export const ids=new Set();

 export const Cart=({children})=>{
     const [cartstate,dispatch]=useReducer(cartReducer,initialState,()=>{
        var cart;
        if (typeof window !== 'undefined') {
             cart=JSON.parse(localStorage.getItem("cartstate"));
        }
        return cart ? cart : initialState;
        
     });
     if(cartstate.Items.length>0){
         cartstate.Items.forEach((item,index,arr)=>{
             ids.add(item.id);
         })    
     }
     useEffect(()=>{
        localStorage.setItem("cartstate",JSON.stringify(cartstate));
    },[cartstate])
     return(
<cartContext.Provider value={{cartstate,dispatch}}>
    {children}
</cartContext.Provider>

     )
 }


 