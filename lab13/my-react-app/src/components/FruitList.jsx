import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Grapes"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;
