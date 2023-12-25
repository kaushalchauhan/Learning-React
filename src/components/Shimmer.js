const Shimmer = () => {
  return (
    // <div classNameName="shimmer-container">
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    //   <div classNameName="shimmer-card">
    //     <div classNameName="shimmer-card-img"></div>
    //   </div>
    // </div>
    <div>
      <div className="border border-black-300 shadow rounded-md p-4 mt-10 max-w-sm w-full">
        <div className=" flex space-x-4 ">
          <div className="rounded-full  bg-slate-500 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-600 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                <div className="h-2 bg-slate-600 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-black-300 shadow rounded-md p-4 mt-10 max-w-sm w-full">
        <div className=" flex space-x-4 ">
          <div className="rounded-full  bg-slate-500 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-600 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                <div className="h-2 bg-slate-600 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shimmer;
