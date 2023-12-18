import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State variable - Super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5729847&lng=77.32490430000001"
    );
    const json = await data.json();

    const reslist =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("json", reslist);
    setlistOfRestaurant(reslist);
    setFilteredRestaurant(reslist);
  };

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  // conditional rendering - rendering basis on condition

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("hey", filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
