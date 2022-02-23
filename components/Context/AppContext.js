//import React from 'react';
import {createContext,useReducer,useEffect} from 'react';
import {Loginreducer} from './Loginreducer.js';

//global state for determining if user is logged or notification
export const Logincontext=createContext();
const initialstate={
    isLoggedIn: false,
};


export default function AppContext( {children}){
    const [loginstate,dispatch]=useReducer(Loginreducer,initialstate,()=>{
        var state ;
        if (typeof window !== 'undefined') {
             state=JSON.parse(localStorage.getItem("isloggedin"));
        }
        return state ? state :initialstate;

    });
    useEffect(()=>{
        localStorage.setItem("isloggedin",JSON.stringify(loginstate));
    },[loginstate])
   
    return(
        <Logincontext.Provider value={{loginstate,dispatch}}>
            {children}
        </Logincontext.Provider>
    );
}
