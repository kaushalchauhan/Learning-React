import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndexItem, setShowIndexItem] = useState(0);

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

  const itemCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log("card", itemCards);

  const categories = itemCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("fil", categories);

  const dummy = "dummy data";

  return (
    <div className="res-menu text-center">
      <h2 className="font-bold my-6 text-2xl ">{name}</h2>
      <h3 className="font-bold text-lg">
        cuisines: {cuisines.join(", ")}, <span> {costForTwoMessage},</span>{" "}
        <span> Rating: {avgRating}</span>
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndexItem ? true : false}
          setShowIndexItem={() => setShowIndexItem(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
