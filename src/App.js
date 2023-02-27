import React, { lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Error from "./Components/Error";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import UserContext from "./utils/UserContext";
import store from "./utils/store";
import { Provider } from "react-redux";
const InstaMart = lazy(()=>import("./Components/InstaMart"))
const App = ()=>{
const [user,setUser]= useState({user:{
   name:"Gowtham",
   email:"gowthamkarukola@gmail.com"
}})


   return(
   <Provider store={store}>
    <UserContext.Provider value={user}>
    <Header/>   
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
    </Provider> 
   
   ) 
}

const appRouter=createBrowserRouter([
   {
      path:'/',
      element:<App/>,
      errorElement:<Error/>,
      children:[
         {
            path:'/',
            element:<Body/>,
         }
        ,
         {
            path:'/About',
            element:<About/>,
         },
         {
            path:'/Contact',
            element:<Contact/>,
         },
         {
            path:'/Cart',
            element:<Cart/>,
         },
         {
            path:'/RestaurantMenu/:resId',
            element:<RestaurantMenu/>,
         },
         {
            path:'/Instamart',
            element:<Suspense><InstaMart/></Suspense>,
         }
      ]
        

   }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);