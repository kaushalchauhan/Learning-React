import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h2>About us page</h2>
      <User
        name={"Kaushal Chauhan (function)"}
        location={"Garhmukteshwar"}
        username={"kaushalRchauhan"}
      />
      {/* <UserClass
        name={"Kaushal Chauhan (class)"}
        location={"Garhmukteshwar"}
        username={"kaushalRchauhan"}
      /> */}
    </div>
  );
};
export default About;
