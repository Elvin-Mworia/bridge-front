 import styles from "../styles/signup.module.scss"
 import Svg from "../components/svg.js"
 import Navbar from "../components/Navbar.js";
 import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
 import axios from "axios";
 import {useState} from "react";
import {useRouter} from "next/router";

 export default function Register(){
     const router=useRouter();
 const [customer,setCustomer]=useState("");
 const [plan,setPlan]=useState("");
 const [firstname,setFirstname]=useState("");
 const [secondname,setSecondname]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [price,setPrice]=useState("");
 
 const data={
     firstname,
     secondname,
     plan,
     email,
     password,
     customer
   
 }

    const stripe = useStripe();
    const elements = useElements();
    var a;
    function selected(){
    //  a=document.getElementsByName("plans").value;
    if(price==="2"){
      setPlan("prod_L6iUiLFa9YQ39B");
      console.log(plan);
    }
    else if(price==="5"){
      setPlan("prod_L6iWQYdA4hAn5H");
      console.log(plan);
    }
     else{
      setPlan("prod_L6iXj7rz2a4AqU");
      console.log(plan);

     }
    //  switch(price){
    //    case "2":
    //     setPlan("prod_L6iUiLFa9YQ39B");
    //     break;
    //   case "5":
    //     setPlan("prod_L6iWQYdA4hAn5H");
    //     break;
    //   case "10":
    //     setPlan("prod_L6iXj7rz2a4AqU");
    //     break;
    //    default:
    //      NaN
    //      break;

    //  }
    //  console.log(a);
     
     
    }
    const final=async ()=>{
        axios.post(`${process.env.BACKEND_URL}:${process.env.PORT}/auth/register`,data).then((res)=>{
                    //redirect to home and  login
                    router.push("/");
    })
}
    
    
    const submit=async (e)=>{
     e.preventDefault();
        if (!stripe || !elements) {
           
            return;
          }
    console.log(customer);
    console.log(price);
    
          if(customer==="Investor"){
              
    const result = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      });
  
      if (result.error) {
        console.log(result.error.message);
      } else {
        // selected();
        const data={
          'payment_method': result.paymentMethod.id,
          'email': email,
          "price":price

        }
        const res = await axios.post(`${process.env.BACKEND_URL}:${process.env.PORT}/stripe/sub`,data);
        // eslint-disable-next-line camelcase
        const {client_secret, status} = res.data;
        final();
  
        if (status === 'requires_action') {
          stripe.confirmCardPayment(client_secret).then(function(result) {
            if (result.error) {
              console.log('There was an issue!');
              console.log(result.error);
              // Display error message in your UI.
              // The card was declined (i.e. insufficient funds, card has expired, etc)
            } else {
              console.log('You got the money!');
              // Show a success message to your customer
            
            }
          });
        } 
      }
            //   axios.post("${process.env.BACKEND_URL}:${process.env.PORT}/stripe/sub",{email,plan,token}).then((res)=>{
            //       console.log(res)
            
            //   })
          }
          else{
            axios.post(`${process.env.BACKEND_URL}:${process.env.PORT}/stripe/pay`,{email,amount:"2000"}).then((res)=>{
                console.log(res)
                final();
                alert("please login and fill in the details in your profile to make it easier for investors to contact you")
                })
            
          }
        

         
    }

    
     return(
       <>
           <Navbar/>
         <div className={styles.container}>
       
             <div className={styles.illustration}>
                 <div className={styles.welcome}><Svg /></div>
               
               <p><span>Welcome to Bridge,</span><br/>
               <span>complete the sign up form <br/>to be a  <b>member</b> of our <br/>exciting <b>community</b>.</span>
               </p>
             
            </div>

            <div className={styles.inputform}>
                <form >
                    <ul>
                        <li >
                        <input type="text" required placeholder="First name"
                         onChange={(e)=>{setFirstname(e.target.value)}}/>
                        
                        
                        </li>
                        <li>
                        <input type="text" required placeholder="Last name"
                         onChange={(e)=>{setSecondname(e.target.value)}}/>
                      
                        </li>
                        <li>
                        <input type="text" required placeholder="Email"
                         onChange={(e)=>{setEmail(e.target.value)}} />
                      
                        </li>
                        < li>
                       
                        <input list="customer" name="customer" onChange={(e)=>{setCustomer(e.target.value)}}
                        
                placeholder='Investor or Entreprenuer' required/> 
                        <datalist id="customer">
                    <option value="Investor"/>
                    <option value="Entreprenuer"/>
          
                </datalist>           
                       </li>
                   
                       < li>
                       {/* <label >Choose a plan:</label> */}
                       
                       <input list="plan" name="plans" onChange={(e)=>{setPrice(e.target.value)}}
                       placeholder="Choose a plan"
                        
                         required/> 
                       {/* <select name="plan" id="plan" onChange={
                           (e)=>{selected()}
                       }required > */}
                         <datalist id="plan"> 
<option value="2">$ 2</option>
<option value="5">$ 5</option>
<option value="10">$ 10</option>
</datalist>

{/* </select> */}
                 
                      
                        </li>
                        < li>
                        {/* <input type="text" required placeholder="Credit Card info"/> */}
                        <CardElement className={styles.CardElement}
                     
                        />
                        </li>
                       < li>
                        <input type="password" required placeholder="Password"
                         onChange={(e)=>{setPassword(e.target.value)}}/>
                      
                        </li>
                        <li>
                        <input type="password"  required placeholder="Confirm Password"/>
                      
                        </li>
                       <li><input required type="checkbox" className={styles.checkbox}/><span>By clicking this you agree to our terms and conditions.</span> </li> 
                       <li><button type="submit"  onClick={submit}>Sign Up</button></li>
                    </ul>
                    
                </form>
                
            </div>
         </div>
         </>  
     )
 }