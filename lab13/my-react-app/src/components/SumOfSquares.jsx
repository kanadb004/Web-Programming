import React from "react";

const SumOfSquares = ({ num1, num2 }) => {
  const sumOfSquares = num1 ** 2 + num2 ** 2;
  return <p>Sum of squares of {num1} and {num2} is: {sumOfSquares}</p>;
};

export default SumOfSquares;
