import styles from "../styles/add.module.scss"
import Navbar from "../components/Navbar.js";
import {useState,useContext} from "react";
import {usercontext} from "../components/Context/UserContext";
import axios from "axios";
export default function Add(){
    const[value,setValue]= useState("");
    const {customer}=useContext(usercontext);
    const data={
        id:customer.id,
        pitch:value
    }
 
    function submit(e){
        e.preventDefault();
   axios.post(`${process.env.BACKEND_URL}:${process.env.PORT}/pitch/create`,data).then((res)=>{
       setValue("");
       alert("Your pitch was submitted,Thank you and all the best");
   })

    }
    return(
        <div className={styles.container}> 
        <Navbar/>
        <div className={styles.wrapper}>
            <h1>
                Write your <span>Pitch</span> 
            </h1>
            <form>
            <textarea onChange={e=>setValue(e.target.value)}
           placeholder="Write Here" />

           
<button type="submit" onClick={submit}>Post</button>
            </form>
            
        </div>
            
            
        </div>
    )
}