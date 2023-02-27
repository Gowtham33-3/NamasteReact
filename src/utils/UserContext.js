import { createContext } from "react";

const UserContext = createContext(
    {
        user:{
            name:"gowtham karukola",
            email:"gowthamkarukola@gmail.com",
        },
        
    }
);
export default UserContext