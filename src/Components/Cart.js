import { useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
const Cart= ()=>{
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
   var  cartTotal=0;
   {cartItems.map((item)=>(cartTotal+= item.price/100));}
   
    const handleClearCart = () => {
      dispatch(clearCart());
    };
    return(
        <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <h2>cart Total - {cartTotal}</h2>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item,index) => (
          <FoodItem key={item.id+index} {...item} />
        ))}
      </div>
    </div>
    )
}

export default Cart