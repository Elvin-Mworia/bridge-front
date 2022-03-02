import styles from "../styles/pitch.module.scss";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../components/Navbar.js";
import { RestaurantMenuTwoTone } from "@mui/icons-material";
import {useContext,useEffect,useState} from "react";
import {usercontext} from "../components/Context/UserContext";
import axios from "axios";
import {useRouter} from "next/router";

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


// export  async function getStaticProps(){
//     var state;
// if (typeof window !== 'undefined') {
//     state=JSON.parse(localStorage.getItem("user"));
// }
  
//         var tray=[];
//         var idea=[];
//        const res=await fetch(`http://localhost:3001/idea/ideasbought/:${state.id}`);
//           res.map((r)=>(tray.push(r.ideaid)));
//           tray.map(async (r)=>{

//             const pitch=await fetch(`http://localhost:3001/idea/ideas/id:${r}`);
//              idea.push(pitch);
//              return pitch;

// })  
       
 
//         return {
//             props:{ideas:idea},
         
//         }
           

// }

export default function Bought(){
    const {customer}=useContext(usercontext);
    // const [bought,setBought]=useState([]);
    const [ideas,setIdeas]=useState([]);
    const router=useRouter();

    useEffect(()=>{
        axios.get(`http://localhost:3001/idea/ideascustomer/:${customer.id}`).then((res)=>{
            setIdeas(res.data);
            })
    //   bought.forEach((b,index,arr)=>{
    //         axios.get(`http://localhost:3001/idea/ideas/:${b.ideaid}`).then((res)=>{
    //             setIdeas(res.data);
    //             console.log(ideas);
    //         })
    //     })
    },[])
    return(
        <div>
            <Navbar/>
        <div className={styles.container}>
            {ideas ?
              ideas.map((idea)=>{

                return(<>
                    {idea ? <div className={styles.card} key={idea.id}>
                
                    <p>{idea?.pitch}</p>
                    <footer>    <span>Bought:{idea.createdAt.substring(0,10)}</span></footer>
                    
                   </div>:<p>Buy some Ideas</p>
                }
                </>
                    
                    )
                    
                
                            })
            :router.push("/Ideas")}
          
            
           
          

            </div>
        </div>
    )
}