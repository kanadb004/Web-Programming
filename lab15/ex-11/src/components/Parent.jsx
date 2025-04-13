import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <Child message="Hello from parent!" />
    </div>
  );
};

export default Parent;
