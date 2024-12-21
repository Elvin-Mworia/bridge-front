import {useState,useEffect} from "react";
import axios from "axios";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
//import {usercontext} from "./Context/UserContext";
import styles from "../styles/entreprenuer.module.scss";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Image from "next/image";

export default function Entreprenuer({trigger,setTrigger,id}){
   
    const [user,setUser]=useState("");
    const [biodata,setBiodata]=useState("");
    // const imageurl=`${process.env.BACKEND_URL}:${process.env.PORT}${bio.?profilepicture}`

    useEffect( ()=>{
        // const biodata=await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/bio/: 4ba59165-8916-4fea-ae70-d32649774400`);
        // setBio(biodata);
    //   console.log(biodata);
        axios.get(`${process.env.BACKEND_URL}:${process.env.PORT}/user/:${id}`).then((res)=>{
            setUser(res.data);
            console.log(res.data);
            
              
        })
        axios.get(`${process.env.BACKEND_URL}:${process.env.PORT}/bio/data/:${id}`).then((res) => {
                    setBiodata(res.data);
                    console.log(res.data);
                    console.log(biodata);


                })
      
        


    },[])
    

 return(<>{trigger ?
 
<div className={styles.container}>
    <CancelOutlinedIcon className={styles.cancel} onClick={setTrigger(!trigger)}/>
    <div className={styles.image}>{biodata?.profilepicture ? <img className={styles.imge} src={`${process.env.BACKEND_URL}:${process.env.PORT}/api${biodata.profilepicture}`} alt=""/>: <AccountCircleIcon className={styles.icon} />}</div>
    

</div>
 
 : ""}


</>);

}