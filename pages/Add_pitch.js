import styles from "../styles/add.module.scss"
import Navbar from "../components/Navbar.js";
import {useState} from "react";
export default function Add(){
    const[value,setValue]= useState("");
    console.log(value);
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

           
<button type="submit" onClick={()=>(setValue(""))}>Post</button>
            </form>
            
        </div>
            
            
        </div>
    )
}