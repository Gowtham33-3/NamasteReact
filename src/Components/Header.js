import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
//import { BiCart } from "react-icons";
const Header= ()=>{
    const isOnline=useOnline();
    const [isLoggedIn,setIsLoggedIn] =useState(false)
    const {user}  = useContext(UserContext)
    const cartItems = useSelector((store)=> store.cart.items)
    return(
        <div className="relative">
        <div className="bg-blue-200 pr-5 shadow-lg flex items-center justify-between sticky top-0 left-0 right-0">
            <a href="./"><img className="w-100 h-100" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw"  width="100"/></a>
            <ul className="flex p-5">
                <li className="px-3"><Link to="/">Home</Link></li>
                <li className="px-3"><Link to="/About">About us</Link></li>
                <li className="px-3"><Link to="/Contact">contact</Link></li>
                <li className="px-3"><Link to="/Instamart">Instamart</Link></li>
                <li className="px-3"><Link to="/Cart">Cart- {cartItems.length} items</Link></li>
           
            </ul>
     {
        isOnline ? (<h2>Online</h2>): (<h2>Offline</h2>)
     }
     <h3>{user.name}</h3>
    {
      isLoggedIn ?(<button onClick={()=>(setIsLoggedIn(false))}>Logout</button>):
       (<button onClick={()=>(setIsLoggedIn(true))}>Login</button>)
    }
        </div>
        </div>
    )
}
export default Header;