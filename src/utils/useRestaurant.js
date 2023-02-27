import { useEffect, useState } from "react"
import { RES_MEN_API } from "../Constants"

const useRestaurant= (resId)=>{

    const [restaurantMenu,setRestaurantMenu] =useState()

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(RES_MEN_API+resId);
        const json = await data.json();
        setRestaurantMenu(json.data);
      }

      return restaurantMenu
}

export default useRestaurant;