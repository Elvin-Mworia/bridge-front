import {createContext,useReducer,useEffect} from 'react';

import {user_Reducer} from './userReducer.js';
export const usercontext=createContext();

const initialstate={
    customer:"",
    email:"",
    id:""
};


export default function UserContext ( {children}){
   
    
    
    const [customer,Dispatch]=useReducer(user_Reducer,initialstate,()=>{
        var user;
        if (typeof window !== 'undefined') {
             user=JSON.parse(localStorage.getItem("user"));
        }
        return user ? user:initialstate;

    });
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(customer));
    },[customer])
    return(
        <usercontext.Provider value={{customer,Dispatch}}>
            {children}
        </usercontext.Provider>
    );
}
