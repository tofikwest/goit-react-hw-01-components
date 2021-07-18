import React from "react";
import Profile from "./components/Profile";
import user from "./JSON/user.json";

const AppProfile = () => {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export default AppProfile;
