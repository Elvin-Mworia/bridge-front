import styles from "../styles/pitch.module.scss";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../components/Navbar.js";
import { RestaurantMenuTwoTone } from "@mui/icons-material";

export  async function getServerSideProps(){
    
       const res=await fetch("http://localhost:3001/pitch");
       const pitches= await res.json();
    //    console.log(pitches);
        return {
            props:{ideas:pitches}
        }
           

}

export default function Pitches({ideas}){
    return(
        <div>
            <Navbar/>
        <div className={styles.container}>
            {ideas.map((idea)=>{
return(<div className={styles.card} key={idea.id}>
    <p>{idea.pitch}</p>
    <AccountCircleIcon className={styles.icon}/>
    <span>{idea.time}</span>
    </div>)

            })}
            
           
          

            </div>
        </div>
    )
}