import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // subscribing to the store using Selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="z-10 header flex justify-between bg-purple-200 shadow-md mb-2 p-3 items-center sticky top-0">
      <div className="logo-container cursor-pointer">
        <Link to="/">
          <img className="logo w-14" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <div className="group relative flex justify-center">
            <li title="custom hook" className="px-3 cursor-progress">
              Status : {onlineStatus ? "Online : ✅" : "Offline : 🔴"}
            </li>

            <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
              Tells the internet connection status✨
            </span>
          </div>

          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact us</Link>
          </li>

          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">
              Cart
              <sup className="font-bold text-red-500 t ext-xl p-1">
                {cartItems.length}
              </sup>
            </Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li
            className="font-bold px-3"
            title="from react context & updated from App.js using Provider"
          >
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
