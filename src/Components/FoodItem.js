import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, description, cloudinaryImageId, price,id }) => {

  const dispatch =useDispatch()

  const handleRemoveItem= (id)=>{
    dispatch(removeItem(id))
  }

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-blue-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
      <button onClick={()=>handleRemoveItem(id)}>Remove</button>
    </div>
  );
};

export default FoodItem;
