import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body= ()=>{
    const [searchText,setSearchText]=useState("")
    const [filteredData,setFilteredData]=useState([])
    const [allRestaurants,setAllRestaurants]=useState([])
    const isOnline= useOnline();
    useEffect(()=>{
      getRestaurants();
    },[])
    async function getRestaurants(){
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0457207&lng=80.22062869999999&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredData(json?.data?.cards[2]?.data?.data?.cards);
    }

    if(!isOnline){
      return(<h2>OOPS YOU ARE OFFLINE !!!!!!!</h2>)
    }

    if(!allRestaurants){return null}

    return  allRestaurants.length===0 ? <Shimmer/>:(
      <div className="bg-orange-200 ">
       
      <div className="bg-blue-200 my-3 shadow-lg ">
        <input className="bg-slate-200   rounded-lg hover:bg-slate-400 p-1.5 m-1 " placeholder="search" type="text" value={searchText} onChange={(e)=> (setSearchText(e.target.value)) } />
        <button className="blue-300 hover:bg-blue-bg-400  p-2 rounded-md m-2" onClick={ ()=>{
           setFilteredData(filterData(searchText,allRestaurants));
        }}>Search</button>
      </div>
      
      <div className="flex flex-wrap mx-auto max-w-6xl ">
        {
           filteredData.map((restaurant)=>{
            return(
             <Link to={"/RestaurantMenu/"+restaurant.data.id} key={restaurant.data.id}> <RestaurantCard {...restaurant.data} /></Link>
            );
           })
        }
      </div>
      </div>
    )

}

export default Body;