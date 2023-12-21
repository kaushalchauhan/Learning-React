import { useEffect, useState } from "react";

const User = ({ name, location, username }) => {
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hey Kaushal");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count1]);

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>@{username}</h4>
      <h5>Count : {count1}</h5>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Count + 1
      </button>
    </div>
  );
};
export default User;
