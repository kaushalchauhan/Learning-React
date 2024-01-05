import RestaurantCard, { withAvailability } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State variable - Super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const OpenedRestro = withAvailability(RestaurantCard);

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
    console.log(json);
    console.log("json", reslist);
    setlistOfRestaurant(reslist);
    setFilteredRestaurant(reslist);
    console.log("list", listOfRestaurant);
  };

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  // conditional rendering - rendering basis on condition

  if (onlineStatus === false)
    return (
      <h2>
        Looks like you're offline!!! Please check your internet connection.
      </h2>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            data-testid="searchTextInput"
            className="search-input p-1 border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            data-testid="searchBtn"
            className="px-6 py-2 m-4 bg-green-200 rounded-sm"
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
          <button
            className="filter-btn px-6 py-2 m-4 bg-blue-200 rounded-sm"
            onClick={() => {
              const fiteredList = listOfRestaurant.filter((res) => {
                return res.info.avgRating > 4.4;
              });
              setlistOfRestaurant(fiteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            {restaurant.info.availability.opened ? (
              <RestaurantCard resData={restaurant.info} />
            ) : (
              <OpenedRestro resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
