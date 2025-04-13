import React from "react";

const UserPosts = ({ posts }) => (
  <div className="posts">
    <h3>User Posts</h3>
    {posts.map((post, i) => (
      <div key={i} className="post">{post}</div>
    ))}
  </div>
);

export default UserPosts;
