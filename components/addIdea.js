import styles from "../styles/addIdea.module.scss";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {useState} from "react";
import axios from "axios";


export default function Idea({trigger,setTrigger}){
    const [amount,setAmount]=useState(0);
    const [idea,setIdea]=useState("");
    const data={price:amount,pitch:idea,pitcherid:"3ca65014-80e2-45d4-9845-bb599c3a5da2"};
    function submit(e){
        e.preventDefault();
        axios.post(`${process.env.BACKEND_URL}:${process.env.PORT}/idea/create`,data).then((res)=>{
            setTrigger(!trigger);
        })
    }
    return(
        <>
     {trigger ? <div className={styles.container}>
     <form onSubmit={submit}>
         <CancelOutlinedIcon className={styles.icon}
         onClick={()=>{setTrigger(!trigger)}}/>
         <ul><li>
         <label>Price in dollars</label>
         <input type="text" placeholder="Amount here" onChange={(e)=>{setAmount(e.target.value)}} required /></li></ul>
       
         <textarea onChange={(e)=>{setIdea(e.target.value)}} required placeholder="write your idea">


         </textarea>
         <button type="submit">Post Idea</button>
     </form>
     </div> :""}   
     </>

    )
}