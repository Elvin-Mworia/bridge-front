import styles from "../styles/ideas.module.scss";
import ShoppingCartSharpIcon  from '@mui/icons-material/ShoppingCartSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import WbIncandescentSharpIcon from '@mui/icons-material/WbIncandescentSharp';
import Navbar from "../components/Navbar.js";
import axios from "axios";
import {useMemo,useContext,useState,useEffect} from "react";
import Idea from "../components/addIdea.js"
import {cartContext} from "../components/Context/CartContext.js";
import {useRouter} from "next/router";

export  async function getServerSideProps(){
    //     var list=[];
    //    axios.get("${process.env.BACKEND_URL}:${process.env.PORT}/idea/").then((res)=>{
    //       list=[...res.data.json()]
    //    }); 
       console.log(`${process.env.PORT}`);
       const res=await fetch(`${process.env.BACKEND_URL}:${process.env.PORT}/idea/`);
       const idea= await res.json();
        return {
            props:{ideas:idea}
        }
        
        
      

}

function Ideas({ideas}){ 
    const[state,setState]=useState(false);
    const {cartstate,dispatch}=useContext(cartContext);
    const router=useRouter();
var cart;  
if (typeof window !== 'undefined') {
    cart=JSON.parse(localStorage.getItem("cartstate"));
};  
useEffect(()=>{},[cartstate]);
    
   
    return(
        <div className={styles.container}>
            <Navbar/>
            <div className={styles.head}>
                <div className={styles.shop}> <h1>Shop for  <span>Idea$</span></h1>
                <WbIncandescentSharpIcon className={styles.bulb}/>
                </div>
               
            <div className={styles.iconleft}>
                <div className={styles.cart}>
            <ShoppingCartSharpIcon  className={styles.icon} />
            <p>{cartstate.totalItems}</p>
            </div>
            <AddCircleOutlineSharpIcon onClick={()=>(setState(!state))} className={styles.icon}/>
            {
            
            cartstate.Items.length>0 ? <button className={styles.btn} onClick={()=>{router.push("/checkout")}}>Check Out</button>
             : <button className={styles.btnDisabled} onClick={()=>{router.push("/checkout")}}disabled="true">Check Out</button>} 
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
                          <button onClick={()=>{dispatch({type:"ADD_TO_CART",payload:idea})}}>Buy for ${idea.price}</button>
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