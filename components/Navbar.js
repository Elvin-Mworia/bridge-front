import Link from "next/link";
import Login from "./login.js"
import {useRef,useState,useContext} from "react"
import {Logincontext} from './Context/AppContext.js';
import {useRouter} from "next/router";
import {usercontext} from './Context/UserContext.js';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../styles/navbar.module.scss";

function Navbar(){
  const[state,setState]=useState(false);
  const [show,setShow]=useState(false);
  const {loginstate,dispatch}=useContext(Logincontext);
  const {customer}=useContext(usercontext);
  const router=useRouter();
  const customertype=customer.customer;
 
    return(
        <>
        <div className=
        {styles.navbar}> 
                <Link href="/">
                <h1 ><a>Bridge</a></h1>
                </Link>
            <nav  >
           
                <ul className={styles.navbarmenu} >
                    <li >
                        <Link href="/">
                            <a className={styles.anchor} >Home</a>
                        </Link>
                    </li>
                    {
                       customertype==="Investor" && loginstate.isLoggedIn ?  <li > 
                        <Link href="/Pitches">
                            <a >Pitches</a>
                        </Link>
                    </li>:""
                    }
                  
                    {
                       customertype==="Entreprenuer" && loginstate.isLoggedIn  ? 
                        <li > 
                        <Link href="/Profile">
                            <a >My Profile</a>
                        </Link>
                    </li>:''

                    }
                
                {
                      customertype==="Entreprenuer" && loginstate.isLoggedIn  ? 
                      <li > 
                      <Link href="/Add_pitch">
                          <a >Add Pitch</a>
                      </Link>
                  </li>:""

                }
                      <li > 
                        <Link href="/Ideas">
                            <a >Ideas</a>
                        </Link>
                    </li>
                    {
                     loginstate.isLoggedIn ? 
                      <li > 
                      <Link href="/Bought">
                          <a >Bought</a>
                      </Link>
                  </li>:""

                }
                    <li 
                    >
                        <Link href="#">
                           {
                            
                           loginstate.isLoggedIn ? <a onClick={()=>{dispatch({type:"LOGOUT"});localStorage.removeItem("user"); localStorage.removeItem("isloggedin"); sessionStorage.removeItem("accessToken"); router.push("/") }}>Logout</a>   : <a onClick={()=>(setState(!state))}>Login</a>   } 
                         
                        </Link> 
                       
                    </li>
                  
                </ul>
                <MenuIcon className={styles.menuicon} onClick={(e)=>setShow(!show)}/>
              {show ?  <div className={styles.sidebar}>
                <nav className={styles.sidebarNav}  >
           
           <ul className={styles.sidebarmenu} >
               <li >
                   <Link href="/">
                       <a className={styles.anchor} >Home</a>
                   </Link>
               </li>
               {
                  customertype==="Investor" && loginstate.isLoggedIn ?  <li > 
                   <Link href="/Pitches">
                       <a >Pitches</a>
                   </Link>
               </li>:""
               }
             
               {
                  customertype==="entrepreneur" && loginstate.isLoggedIn  ? 
                   <li > 
                   <Link href="/Profile">
                       <a >My Profile</a>
                   </Link>
               </li>:''

               }
           
           {
                 customertype==="entrepreneur" && loginstate.isLoggedIn  ? 
                 <li > 
                 <Link href="/Add_pitch">
                     <a >Add Pitch</a>
                 </Link>
             </li>:""

           }
                 <li > 
                   <Link href="/Ideas">
                       <a >Ideas</a>
                   </Link>
               </li>
               {
                loginstate.isLoggedIn ? 
                 <li > 
                 <Link href="/Bought">
                     <a >Bought</a>
                 </Link>
             </li>:""

           }
               <li 
               >
                   <Link href="#">
                      {
                       
                      loginstate.isLoggedIn ? <a onClick={()=>{dispatch({type:"LOGOUT"});localStorage.removeItem("user"); localStorage.removeItem("isloggedin"); sessionStorage.removeItem("accessToken"); router.push("/") }}>Logout</a>   : <a onClick={()=>(setState(!state))}>Login</a>   } 
                    
                   </Link> 
                  
               </li>
             
           </ul>
         
            
           

       </nav>
                </div>:""
                 }
                

            </nav>
           
           

        </div>
        <Login trigger={state} setTrigger={setState}/>
        </>
    )
}
export default Navbar;