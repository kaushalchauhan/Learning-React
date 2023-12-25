import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="z-10 header flex justify-between bg-purple-200 shadow-md mb-2 p-3 items-center sticky top-0">
      <div className="logo-container cursor-pointer">
        <Link to="/">
          <img className="logo w-14" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-3">
            Status : {onlineStatus ? "Online : ✅" : "Offline : 🔴"}
          </li>
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
          <li className="px-3">Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "login"
                ? setloginBtn("logout")
                : setloginBtn("login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
