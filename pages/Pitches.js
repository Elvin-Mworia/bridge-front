import styles from "../styles/pitch.module.scss";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../components/Navbar.js";
import { RestaurantMenuTwoTone } from "@mui/icons-material";
import {useRouter} from "next/router";
import Link from "next/link";

// export async function getStaticPaths(){

//     const res=await fetch("http://localhost:3001/pitch");
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
    
       const res=await fetch("http://localhost:3001/pitch");
       const pitches= await res.json();
    //    console.log(pitches);
        return {
            props:{ideas:pitches},
         
        }
           

}

export default function Pitches({ideas}){
  
    return(
        <div>
            <Navbar/>
        <div className={styles.container}>
            {ideas.map((idea)=>{

return(<Link href={`/Pitches/${idea.id}`} key={idea.id}>
<a className={styles.card}  >
    <p>{idea.pitch}</p>
    <AccountCircleIcon className={styles.icon}/>
    <span>{idea.time}</span>
    </a>
    </Link>
    
    )
    

            })}
            
           
          

            </div>
        </div>
    )
}