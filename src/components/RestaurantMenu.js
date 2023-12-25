import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5729847&lng=77.32490430000001&restaurantId=" +
  //       resId
  //   );

  //   const json = await data.json();

  //   console.log("menu", json);
  //   setResInfo(json);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  console.log(name);

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log("card", itemCards);
  return (
    <div className="res-menu">
      <h2>{name}</h2>
      <h3>cuisines: {cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Rating: {avgRating}</h2>
      <h3>Menu:</h3>
      <ul>
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id}>
            <li>
              {item?.card?.info?.name} : Rs. {item?.card?.info?.price}
            </li>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                item?.card?.info?.imageId
              }
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
