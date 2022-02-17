import styles from "../styles/ideas.module.scss";
import ShoppingCartSharpIcon  from '@mui/icons-material/ShoppingCartSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import WbIncandescentSharpIcon from '@mui/icons-material/WbIncandescentSharp';
import Navbar from "../components/Navbar.js";
import axios from "axios";
import {useMemo,useState} from "react";
import Idea from "../components/addIdea.js"


export  async function getServerSideProps(){
    //     var list=[];
    //    axios.get("http://localhost:3001/idea/").then((res)=>{
    //       list=[...res.data.json()]
    //    }); 
       const res=await fetch("http://localhost:3001/idea/");
       const idea= await res.json();
        return {
            props:{ideas:idea}
        }
        
        
      

}

function Ideas({ideas}){ 
    const[state,setState]=useState(false);

    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.head}>
                <div className={styles.shop}> <h1>Shop for <span>Idea$</span></h1>
                <WbIncandescentSharpIcon className={styles.bulb}/>
                </div>
               
            <div className={styles.iconleft}>
                <div className={styles.cart}>
            <ShoppingCartSharpIcon  className={styles.icon} />
            <p>1</p>
            </div>
            <AddCircleOutlineSharpIcon onClick={()=>(setState(!state))} className={styles.icon}/>
            </div>

            </div>
            <Idea trigger={state} setTrigger={setState}/>

            <section className={styles.cardcontainer}>
               { ideas?.map((idea)=>{
                   return(
                        <div className={styles.card} key={idea.id}>
                        <div className={styles.ideacontainer}>
                            <p>{idea.pitch}</p>
                        </div>
                          <button onClick={null}>Buy for ${idea.price}</button>
                    </div>
                    )
               }
)

               }
                


            </section>


        </div>
    )
}
export default Ideas