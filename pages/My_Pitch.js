import styles from "../styles/mypitches.module.scss"
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../components/Navbar.js";
import axios from "axios";

export async function getServerSideProps(){
    const res=await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/pitch/entrepreneur/:9092e2d0-63ad-4487-8ab6-79c16860f87e`);
    const ideas= await res.json();
    console.log(ideas);
     return {
         props:{ideas:ideas}
     }
        
  

}

export default function Pitch({props}){
return(
    <div>
        <Navbar/>
    <div className={styles.container}>
        <div className={styles.card}>
            <AccountCircleIcon className={styles.icon}/>
            
                <p>Nisi qui quis non qui est culpa dolore laboris. Sit irure nisi culpa proident nulla ipsum. Culpa irure esse adipisicing sit nostrud sit. Adipisicing laborum commodo sit nulla. Laboris in commodo sint Lorem reprehenderit reprehenderit adipisicing do qui quis enim.</p>
                <span>2022-1-10, 5:30 pm</span>
                </div>
                <div className={styles.card}>
            <AccountCircleIcon className={styles.icon}/>
            
                <p>Nisi qui quis non qui est culpa dolore laboris. Sit irure nisi culpa proident nulla ipsum. Culpa irure esse adipisicing sit nostrud sit. Adipisicing laborum commodo sit nulla. Laboris in commodo sint Lorem reprehenderit reprehenderit adipisicing do qui quis enim.</p>
                <span>2022-1-10, 5:30 pm</span>
                </div>
                <div className={styles.card}>
            <AccountCircleIcon className={styles.icon}/>
            
                <p>Nisi qui quis non qui est culpa dolore laboris. Sit irure nisi culpa proident nulla ipsum. Culpa irure esse adipisicing sit nostrud sit. Adipisicing laborum commodo sit nulla. Laboris in commodo sint Lorem reprehenderit reprehenderit adipisicing do qui quis enim.</p>
                <span>2022-1-10, 5:30 pm</span>
                </div>
                <div className={styles.card}>
            <AccountCircleIcon className={styles.icon}/>
            
                <p>Nisi qui quis non qui est culpa dolore laboris. Sit irure nisi culpa proident nulla ipsum. Culpa irure esse adipisicing sit nostrud sit. Adipisicing laborum commodo sit nulla. Laboris in commodo sint Lorem reprehenderit reprehenderit adipisicing do qui quis enim.</p>
                <span>2022-1-10, 5:30 pm</span>
                </div>
                <div className={styles.card}>
            <AccountCircleIcon className={styles.icon}/>
            
                <p>Nisi qui quis non qui est culpa dolore laboris. Sit irure nisi culpa proident nulla ipsum. Culpa irure esse adipisicing sit nostrud sit. Adipisicing laborum commodo sit nulla. Laboris in commodo sint Lorem reprehenderit reprehenderit adipisicing do qui quis enim.</p>
                <span>2022-1-10, 5:30 pm</span>
                </div>
                
                </div>


        </div>

   
)
}