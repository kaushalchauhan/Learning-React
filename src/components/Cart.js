import { useDispatch, useSelector } from "react-redux";
import ResItemMenuList from "./ResMenuItemList";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center w-6/12 m-auto">
      <div className="flex justify-between py-3">
        <h1 className="text-3xl font-bold">Cart </h1>
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="text-white bg-orange-300 rounded-md p-2"
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="text-2xl">
          Cart is empty, Add items to the cart first
        </div>
      )}
      <ResItemMenuList items={cartItems} />
    </div>
  );
};
export default Cart;
