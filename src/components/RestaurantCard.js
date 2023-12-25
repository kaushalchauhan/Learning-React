import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;
  return (
    <div
      className="res-card m-4 p-4 w-[250px] h-max rounded-md hover:border bg-gray-100 hover:bg-gray-200"
      // style={styleCard}
    >
      <img
        className="res-logo rounded-md hover:border"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRating} stars</h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm">{sla.slaString}</h4>
    </div>
  );
};

// Inline CSS in JSX
const styleCard = {
  backgroundColor: "#f0f0f0",
};

export const withAvailability = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-1 rounded-lg">
          Closed
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
