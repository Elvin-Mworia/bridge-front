import Link from "next/link";
import Login from "../components/login.js"
import {useRef,useState} from "react"
function Navbar(){
  const[state,setState]=useState(false);
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
                    <li className="p-4 my-0 mx-3"> 
                        <Link href="/Ideas">
                            <a >Ideas</a>
                        </Link>
                    </li>
                    <li className="p-4 my-0 mx-3">
                        <Link href="#">
                            <a onClick={()=>(setState(!state))}>Login</a>
                         
                        </Link> 
                       
                    </li>
                 
                </ul>
                

            </nav>
           

        </div>
        <Login trigger={state}/>
        </>
    )
}
export default Navbar;