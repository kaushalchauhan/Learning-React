import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State variable - Super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const fiteredList = listOfRestaurant.filter((res) => {
              return res.info.avgRating > 4;
            });
            setlistOfRestaurant(fiteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          onClick={() => {
            // return (setlistOfRestaurant = listOfRestaurant);
          }}
        >
          Clr Filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
