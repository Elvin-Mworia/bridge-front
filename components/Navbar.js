import Link from "next/link";
import Login from "./login.js"
import {useRef,useState,useContext} from "react"
import {Logincontext} from './Context/AppContext.js';
import {useRouter} from "next/router";
import {usercontext} from './Context/UserContext.js';

function Navbar(){
  const[state,setState]=useState(false);
  const {loginstate,dispatch}=useContext(Logincontext);
  const {customer}=useContext(usercontext);
  const router=useRouter();
  const customertype=customer.customer;
 
    return(
        <>
        <div className="navbar bg-white fixed h-12 w-screen flex flex-row justify-between bg-transparent bg-opacity-75 z-50"> 
                <Link href="/">
                <h1 className="logo text-2xl p-4 mx-5"><a>Bridge</a></h1>
                </Link>
            <nav className="flex flex-row justify-evenly w-3/4 ">
           
                <ul className="flex flex-row justify-evenly flex-shrink text-sm  " >
                    <li className="p-4 my-0 mx-3 ">
                        <Link href="/">
                            <a >Home</a>
                        </Link>
                    </li>
                    {
                       customertype==="Investor" && loginstate.isLoggedIn ?  <li className="p-4 my-0 mx-3"> 
                        <Link href="/Pitches">
                            <a >Pitches</a>
                        </Link>
                    </li>:""
                    }
                  
                    {
                       customertype==="entrepreneur" && loginstate.isLoggedIn  ? 
                        <li className="p-4 my-0 mx-3"> 
                        <Link href="/Profile">
                            <a >My Profile</a>
                        </Link>
                    </li>:''

                    }
                
                {
                      customertype==="entrepreneur" && loginstate.isLoggedIn  ? 
                      <li className="p-4 my-0 mx-3"> 
                      <Link href="/Add_pitch">
                          <a >Add Pitch</a>
                      </Link>
                  </li>:""

                }
                      <li className="p-4 my-0 mx-3"> 
                        <Link href="/Ideas">
                            <a >Ideas</a>
                        </Link>
                    </li>
                    {
                     loginstate.isLoggedIn ? 
                      <li className="p-4 my-0 mx-3"> 
                      <Link href="/Bought">
                          <a >Bought</a>
                      </Link>
                  </li>:""

                }
                    <li className="p-4 my-0 mx-3">
                        <Link href="#">
                           {
                            
                           loginstate.isLoggedIn ? <a onClick={()=>{dispatch({type:"LOGOUT"});localStorage.removeItem("user"); localStorage.removeItem("isloggedin"); sessionStorage.removeItem("accessToken"); router.push("/") }}>Logout</a>   : <a onClick={()=>(setState(!state))}>Login</a>   } 
                         
                        </Link> 
                       
                    </li>
                 
                </ul>
                

            </nav>
           

        </div>
        <Login trigger={state} setTrigger={setState}/>
        </>
    )
}
export default Navbar;