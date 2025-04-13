import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const Profile = () => {
  const user = {
    img: "/me.jpeg",
    name: "Kanad Bhattacharya - 23BCE1265",
    email: "abc@gmail.com",
    bio: "Software Developer",
    posts: [
        "Developed a Convolution Neural Network implementing LSTM and optimised it to detect violence against women from CCTV footage",
        "Developed a mobile and web-based Application using ML to identify crop disease, suggest cure and preventive measures based on real time data to mitigate risks."
    ]
  };

  return (
    <div className="profile-container">
      <ProfileImage src={user.img} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default Profile;
