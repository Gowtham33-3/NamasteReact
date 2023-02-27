import { useContext } from "react";
import {IMG_CDN_URL} from "../Constants";
import UserContext from "../utils/UserContext";

const RestaurantCard= ({name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    id,
  }) => {
    const {user}=useContext(UserContext)
    return (
      <div className="w-56 bg-blue-300 p-3 m-3 shadow-lg rounded-sm hover:bg-blue-100/75 ">
        
        <img className="" src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="text-lg font-bold">{name}</h2>
        <h3 className="text-sm">{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
        <h3>{user.name}</h3>
        <h3 className="break-words">{user.email}</h3>
      </div>
    );
}
export default RestaurantCard;