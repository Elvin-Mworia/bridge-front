import styles from "../styles/profile.module.scss"
import Link from "next/link"
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import Navbar from "../components/Navbar.js";
import axios from "axios";
import {useState,useContext,useEffect} from "react";
import {usercontext} from "../components/Context/UserContext";
import { SettingsBrightnessOutlined } from "@mui/icons-material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// export async function getStaticProps(){
//     const {customer}=useContext(usercontext);
//     const resp=await fetch("http://localhost:3001/user/:3ca65014-80e2-45d4-9845-bb599c3a5da2");
//     const user=await resp.json();
//     const res=await fetch("http://localhost:3001/bio/:3ca65014-80e2-45d4-9845-bb599c3a5da2");
//     const bio=await res.json();
   
//  //    console.log(pitches);
//      return {
//          props:{info:bio,
//         user:user}
//      }
        

// }

export default function Profile(){
const [contact,setContact]=useState("");
const [city,setCity]=useState("");
const [county,setCounty]=useState("");
const [country,setCountry]=useState("");
const [socialmedia,setSocialmedia]=useState("");
const [image,setImage]=useState("");
const [user,setUser]=useState({});
const [bio,setBio]=useState({});
const {customer}=useContext(usercontext);
const data={
    contact,
    city,
    county,
    country,
    socialmedia,
    image

}
useEffect( ()=>{
    axios.get(`http://localhost:3001/user/:${customer.id}`).then((res)=>{
        console.log(res.data);
         setUser(res.data);
    })
    axios.get(`http://localhost:3001/bio/:${customer.id}`).then((res)=>{
        console.log(res.data);
        setBio(res.data);
    })

 
},[])

function submit(e){
    e.preventDefault();
    axios.patch(`http://localhost:3001/bio/update/:${customer.id}`,data).then((res)=>{});
}
    return(
        <div>
            <Navbar/>
        <div className={styles.container}>
            <div className={styles.dashboard}>
                <h1>Dashboard</h1>
                <div className={styles.navbar}>
                    <nav>
                        <ul>
                            <li>
                               <Link href="/Profile"><a>Profile</a></Link>
                            </li>
                            <li>
                               <Link href="/My_Pitch"><a>My Pitch</a></Link>
                            </li>
                            <li>
                            <Link href="/Add_pitch"><a>Pitch</a></Link> 
                            </li>
                        </ul>
                    </nav>

                </div>

            </div>
            <div className={styles.profile}>
                <h1>My Profile</h1>
                <h2>Edit Profile</h2>
                <div className={styles.inputs}>
                    <div className={styles.iconwrapper}>
                    < AccountCircleIcon className={styles.icon} onClick={null}/>
                    {/* <AddPhotoAlternateIcon className={styles.addphoto}/> */}
                    </div>
                    <div className={styles.inputsec}>
                        <form onSubmit={submit}>
                        <ul>
                           <li>
                               <input  type="text" placeholder="Firstname" value={user?.firstname} disabled/>
                               <input type="text" placeholder="Lastname" value={user?.lastname} disabled />
                           </li>
                           <li >
                               
                           <input type="file"  placeholder="choose photo" enctype="multipart/form-data" name="file" onChange={(e)=>e.target.files[0]}/>
                           <label>Choose a photo to use as your profile image</label>
                           </li>
                           <li>
                               <input  type="email" placeholder="Email" className={styles.email}
                               preventDefault={true}
                               value={user?.email} disabled/>
                               </li>
                               <li>
                               <input  type="tel" placeholder="Contact Number" className={styles.contact}
                               onChange={(e)=>setContact(e.target.value) }
                               value={bio?.contact}
                               />
                               </li>
                               <li className={styles.region}>
                               <input  type="text" placeholder="City"
                               onChange={(e)=>setCity(e.target.value)} value={bio?.city}/>
                               <input type="text" onChange={(e)=>setCounty(e.target.value)}placeholder="County"
                               value={bio?.county}
                               />
                               <input type="text" placeholder="Country"
                               onChange={(e)=>setCountry(e.target.value)} value={bio?.country} />
                           </li>
                           <li>
                               <input  type="text" placeholder="Social Media handles" className={styles.socials}
                               onChange={(e)=>setSocialmedia(e.target.value)} value={bio?.socialmedia}/>
                               </li>
                             

                        </ul>
                        <button type="submit" >Update</button>
                        </form>
                    </div>


</div>

            </div>
            </div>

        </div>
    )

}
