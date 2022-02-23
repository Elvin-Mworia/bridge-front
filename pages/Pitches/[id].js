import styles from "../../styles/pitch.module.scss";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../../components/Navbar.js";
import { RestaurantMenuTwoTone } from "@mui/icons-material";
import {useRouter} from "next/router";

export async function getStaticPaths(){

    const res=await fetch("http://localhost:3001/pitch");
    const pitches= await res.json();
 const paths=pitches.map((pitch)=>{
     return {
         params:{id:pitch.id}
     }

 })
     return {
       paths,
       fallback:false
     }
        


}

export  async function getStaticProps(context){
        const id=context.params.id
       const res=await fetch("http://localhost:3001/pitch/:"+ id);
       const pitches= await res.json();
    //    console.log(pitches);
        return {
            props:{idea:pitches},
            revalidate:3
        }
           

}

export default function Pitches({idea}){
    const router=useRouter();
    return(
        <div>
            <Navbar/>
        <div className={styles.container}>
          <div className={styles.card} key={idea.id} >
    <p>{idea.pitch}</p>
    <AccountCircleIcon className={styles.icon}/>
    <span>{idea.time}</span>
    </div>

            
            
           
          

            </div>
        </div>
    )
}