import React from "react";

const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return <p>Today is {days[today]}.</p>;
};

export default CurrentDay;
