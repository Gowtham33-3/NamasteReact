import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react"
import Shimmer from "./Shimmer"
import { IMG_CDN_URL } from "../Constants"
import { RES_MEN_API } from "../Constants"
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";



const RestaurantMenu= ()=>{

const {resId} = useParams();
const restaurant = useRestaurant(resId)
const dispatch = useDispatch()
const handleAddItem=(item)=>{
  dispatch(addItem(item))
}
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-3 p-3 justify-around bg-orange-200">
      
      <div className="mr-12">
        <h1 className="font-bold text-xl">Restraunt id: {resId}</h1>
        <h2 className="font-bold text-xl">{restaurant?.name}</h2>
        <img className="rounded-lg" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3 text->{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className="w-64 bg-blue-200 shadow-lg rounded-lg m-2">
            <img className="w-full rounded-sm bg-blue-200 pb-2" src={IMG_CDN_URL+item?.cloudinaryImageId}/>
            <li className="mb-1" key={item.id}>{item.name}</li>
            <li>Rs-{item.price/100 }/-</li>
            <button className="bg-blue-300 hover:bg-blue-400 rounded-sm p-1 px-2 m-1" onClick={()=>handleAddItem(item)}>Add</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
