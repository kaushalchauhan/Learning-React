import { useState } from "react";
import ResItemMenuList from "./ResMenuItemList";

const RestaurantCategory = ({ data, showItems, setShowIndexItem, dummy }) => {
  const showHideItem = () => {
    setShowIndexItem();
  };
  return (
    <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-3 ">
      <div
        className=" flex justify-between cursor-pointer"
        onClick={showHideItem}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ResItemMenuList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategory;
