import {useContext,useEffect,useState} from 'react';
import {useRouter} from "next/router";
import {cartContext} from "../components/Context/CartContext.js";
import styles from '../styles/checkout.module.scss';
import axios from "axios";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import styledEngine from '@mui/styled-engine';
import Payment from "../components/payment"
import Link from "next/link";

function Checkout() {
    const {cartstate,dispatch}=useContext(cartContext);
    const router=useRouter();

useEffect(()=>{},[]);
const [state,setState]=useState(false)
     
    return (
        <>
        
    <div
    className={styles.containercheckoutwrapper}>
  
      <div className={styles.containerCheckout}><Link href="/Ideas" ><a className={styles.back}>Go Back</a></Link>
       {cartstate.Items.map((item,key)=>{
           return(
               <div key={item.id} className={styles.checkoutCard}>
                   
<CancelOutlinedIcon className={styles.icon}
    onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:item})}}/>

               <div className={styles.itemName}>
                   <div className={styles.pitchwrapper}>
                       <p>{item.pitch}</p></div><br/>
              <span><p>Price:${item.price}</p></span> 
               </div>
               </div>

           );
       })}
       <button className={styles.btn} onClick={()=>{setState(!state)}}> Proceed to Payment</button>

       </div>
       
       
   </div>
   <Payment trigger={state} setTrigger={setState}/>


</>    
    )
}

export default Checkout;