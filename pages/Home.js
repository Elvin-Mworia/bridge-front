//import Login from "../components/login.js"
import Entreprenuer from "../components/entreprenuer.js";
import {useState} from "react";

const Home=()=>{
    const [state,setState]=useState(false);
    console.log(state);
    return(
        <div>
            <button onClick={(e)=>{setState(!state); }}>press</button><br/>
            <span>{state}</span>

            <Entreprenuer  id="7a14172d-8751-454d-bcec-a7bcd5910481" trigger={state} setTrigger={setState} />
          
        </div>
    )

}

export default Home;