import styles from "../styles/login.module.scss"
import Link from "next/link"
import axios from "axios";
import {useState,useContext} from "react";
import {usercontext} from './Context/UserContext.js';
import {Logincontext} from './Context/AppContext.js';
import { useRouter } from 'next/router';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function Login({trigger,setTrigger}){
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const router = useRouter();
const{state,dispatch}=useContext(Logincontext);
const{customer,Dispatch}=useContext(usercontext);


function submit(e){
    const data={email,password}
    axios.post("http://localhost:3001/auth/login",data).then((res)=>{
      const data=res.data.user;
      const user={
          customer: data.customer,
          email:data.email,
          id:data.id
      }
      console.log(res.data);
     try{
            
        sessionStorage.setItem("accessToken",res.data.accessToken);
  
        
       
       console.log(res.data.accessToken);
       Dispatch({type:"LOGGED-IN",payload:data});
       dispatch({type:"LOGIN"});
      // console.log(customer);


       if(customer.customer==="Investor"){
        router.push("/Pitches");
       }else{
       router.push("/Add_pitch");
       }
}
catch(err){
   alert("incorrect password or email");
   
}


    })

}

    return(
        <>
        {trigger ? 
        <div className={styles.loginWrapper}>
            <div className={styles.login}>
               <form  onSubmit={submit}> 
               <CancelOutlinedIcon className={styles.icon}
         onClick={()=>{setTrigger(!trigger)}}/>
                <input type="email"  name="Email"  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}  /><br/>
                <input type="password" name="Password"  placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}   /><br/>
               
              <button>Log In</button>
            </form>
        
           <p>Don't have an account?<Link href="/Signup"><span><a>Sign up</a></span></Link></p>
        </div>
        </div>:''
    }</>)
}
