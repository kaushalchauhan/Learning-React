import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      userInfo: {
        name: "dummy",
        location: "dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kaushalchauhan");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    this.timer = setInterval(() => {
      console.log("hey Kaushal");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component did update called");
  }

  componentWillUnmount() {
    console.log("component will unmount called");
    clearInterval(this.timer);
  }

  render() {
    const { name, location, username } = this.props;
    const { count1 } = this.state;
    const { created_at } = this.state.userInfo;

    // created_at.toISOString();

    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>@{username}</h4>
        <h5>Count : {this.state.count1}</h5>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count + 1
        </button>

        <div className="user-card">
          <h2>GitHub Data</h2>
          <img src={this.state.userInfo.avatar_url} alt="user-avtar" />
          <h3>{this.state.userInfo.name}</h3>
          <h3>Bio : {this.state.userInfo.bio}</h3>
          <h3>Account Created Date: {created_at}</h3>
        </div>
      </div>
    );
  }
}
export default UserClass;
