import styles from "../styles/login.module.scss"
import Link from "next/link"
import axios from "axios";
import {useState} from "react";
import { useRouter } from 'next/router'

export default function Login({trigger}){
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const router = useRouter()

function submit(e){
    const data={email,password}
    axios.post("http://localhost:3001/auth/login",data).then((res)=>{
        router.push("/Pitches")

    })

}

    return(
        <>
        {trigger ? 
        <div className={styles.loginWrapper}>
            <div className={styles.login}>
               <form  onSubmit={submit}> 
                <input type="email"  name="Email"  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}  /><br/>
                <input type="password" name="Password"  placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}   /><br/>
               
              <button>Log In</button>
            </form>
        
           <p>Don't have an account?<Link href="/Signup"><span><a>Sign up</a></span></Link></p>
        </div>
        </div>:''
    }</>)
}