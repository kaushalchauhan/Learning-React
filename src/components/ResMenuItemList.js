import { CDN_URL } from "../utils/constants";
const ResItemMenuList = ({ items, dummy }) => {
  //   console.log("itemssss", items);
  console.log(dummy);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            className="p-5 m-2  border-gray-200 border-b-2 text-left flex justify-between"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="">{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 object-cover relative">
              <img
                className="rounded-md"
                src={CDN_URL + item?.card?.info?.imageId}
              />
              <span className="absolute text-sm -bottom-3 left-[30%] shadow-md text-green-400 px-5 py-1 bg-white cursor-pointer border border-gray-300 rounded-md">
                ADD
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ResItemMenuList;
