import UserContext from "../utils/UserContext"
import {useContext} from "react"

const About= ()=>{
    const{user}=useContext(UserContext)

    return(
        <>
         <h1>this is About page !!!!</h1>
        <h2>do know about us</h2>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
       </>
    )   
}
export default About