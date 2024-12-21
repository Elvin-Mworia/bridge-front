import styles from "../../styles/pitchid.module.scss";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../../components/Navbar.js";
import { RestaurantMenuTwoTone } from "@mui/icons-material";
import {useRouter} from "next/router";
import axios from "axios";

export async function getStaticPaths(){

    const res=await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/pitch`);
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
      var pitch={};

       axios.get(`${process.env.BACKEND_URL}:${process.env.PORT}/pitch/:${id}`).then((res)=>{
       
        pitch=res.data;
        console.log(pitch);
          
    })
       
       const bio= await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/bio/data/:${pitch.entreprenuer}`);
       const users= await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/user/:${pitch.entreprenuer}`);
      const biodata=await bio.json();
      const user=await users.json();
       const pitches= pitch;
    //    console.log(pitches);
        return {
            props:{idea:pitches,user:user,biodata:biodata},
            revalidate:3
        }
           

}

export default function Pitches({idea,user,biodata}){
    const router=useRouter();
    return(
        <div>
            <Navbar/>
        <div className={styles.container}>
          <div className={styles.card} key={idea.id} >
    <p>{idea.pitch}</p>
    <section>
        <ul>
            <li className={styles.name}>
                {/* <span>{user.firstname}</span> <span>{user.lastname}</span> */}
                <span>By: {user.firstname} {user?.lastname}</span>
            </li>
       
        {/* <span>{bio.contact}</span> */}
        
      <li ><span className={styles.contact}>Email:{user?.email}</span></li> 
      <li ><span className={styles.contact}>{biodata?.contact}</span></li>   
        {/* <span>{bio.socialmeadia}</span> */}
       <li><span className={styles.socialmedia}>{biodata?.socialmedia}</span></li> 
        </ul>
    </section>
    <AccountCircleIcon className={styles.icon}/>
    <span>Date:{idea.createdAt.substring(0,10
        )}</span>
    </div>

            
            
           
          

            </div>
        </div>
    )
}