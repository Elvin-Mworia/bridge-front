import styles from '../styles/payment.module.scss';
import {useContext} from "react";
import {cartContext} from "./Context/CartContext";
import {usercontext} from "./Context/UserContext";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import axios from "axios";
import {useRouter} from "next/router";
import {ids} from "./Context/CartContext";


export default function Payment({trigger,setTrigger}){
const{cartstate,dispatch}=useContext(cartContext);
const{customer}=useContext(usercontext);
const stripe = useStripe();
const router=useRouter();

const elements = useElements();
async function handlepayment(e){
    e.preventDefault();
        if (!stripe || !elements) {
           
            return;
          }
const result = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          email: customer.email,
        },
      });
  
      if (result.error) {
        console.log(result.error.message);
      } else {
        // selected();
        const data={
          
          'email': customer.email,
          "amount":cartstate.Amount*100

        }
        const res = await axios.post(`${process.env.BACKEND_URL}:${process.env.PORT}/stripe/pay`,data);
        alert("Your payment has been received");
        localStorage.removeItem("cartstate");
        ids.forEach((id,index,arr)=>{
          const ideabought={
            customerid:customer.id,
            ideaid:id};
            axios.post(`${process.env.BACKEND_URL}:${process.env.PORT}/idea/bought`,ideabought);

          
        })
     
          
        setTrigger(!trigger);
        // dispatch({type:"ORDERS_BOUGHT"});
      
        router.push("/Ideas");
       

}}
    return(
    <>{trigger ? <div className={styles.payment}>
    <div className={styles.paymentContainer}>
    <CancelOutlinedIcon className={styles.icon}
    onClick={()=>{setTrigger(!trigger)}}/>
    <div className={styles.head}>
    <h1>Please enter your credit card details to proceed with the payment of the idea/ideas patent</h1>
    </div>
    <CardElement className={styles.cardelement}/>
    <button className={styles.btn} onClick={handlepayment}>Pay $ {cartstate.Amount}</button>
    </div>
    </div>  : ""}
    
  

    </>

    )
}
