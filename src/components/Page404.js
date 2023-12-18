import { useRouteError } from "react-router-dom";

const Page404 = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Opps!!</h2>
      <h3>Something went wrong</h3>
      <h5>
        status {err.status} : {err.statusText}
      </h5>
    </div>
  );
};
export default Page404;
