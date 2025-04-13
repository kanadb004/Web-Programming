import React from "react";

const LeapYearCheck = ({ year }) => {
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  return <p>{year} is {isLeapYear(year) ? "a Leap Year" : "not a Leap Year"}.</p>;
};

export default LeapYearCheck;
