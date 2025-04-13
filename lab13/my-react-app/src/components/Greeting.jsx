import React from "react";

const Greeting = ({ isMorning }) => {
  return <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>;
};

export default Greeting;
