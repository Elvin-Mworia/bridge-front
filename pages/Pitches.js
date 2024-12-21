import styles from "../styles/pitch.module.scss";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../components/Navbar.js";
import { RestaurantMenuTwoTone } from "@mui/icons-material";
import {useRouter} from "next/router";
import Link from "next/link";
import Entreprenuer from "../components/entreprenuer.js";
import {useState,useContext} from "react";

// export async function getStaticPaths(){

//     const res=await fetch("${process.env.BACKEND_URL}:${process.env.PORT}/pitch");
//     const pitches= await res.json();
//  const paths=pitches.map((pitch)=>{
//      return {
//          params:{id:pitch.id}
//      }

//  })
//      return {
//        paths,
//        fallback:false
//      }
        


// }


export  async function getServerSideProps(){
//     var user;
// if (typeof window !== 'undefined') {
//     user=JSON.parse(localStorage.getItem("user"));
// }
     //  var pitch
       const res=await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/pitch`);
    //    var User=await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/user/:${user.id}`);
    //   User=await res.json();
       const pitches= await res.json();
    //    console.log(pitches);
    // if(User.plan==="gold"){
    //     pitch=pitches;
    // }
    // else if( User.plan==="silver"){
    //     pitch=pitches.slice(0,11);
      
    // }
    // else{
    //     pitch=pitches.slice(0,7);
    // }

        return {
            props:{ideas:pitches}
}
}
export default function Pitches({ideas}){
    const [state,setState]=useState(true);
  
    return(
        <div>
            <Navbar/>
        <div className={styles.container}>
            {ideas.map((idea)=>{

return(<Link href={`/Pitches/${idea.id}`} key={idea.id}>
<a className={styles.card}  >
    <p>{idea.pitch}</p>
    <AccountCircleIcon className={styles.icon} onClick={(e)=>{setState(!state)}}/>
    <span>Date:{idea.createdAt.substring(0,9)}</span>
     <Entreprenuer className={styles.semicard}  id={idea.entreprenuer} trigger={state} setTrigger={setState} />
    
    </a>
    </Link>
   
    
    )
    

            })}
            
           
          

            </div>
        </div>
    )
}