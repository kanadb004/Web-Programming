import React, { useState } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>Generate Number</button>
      {number && <p>Random Number: {number}</p>}
    </div>
  );
};

export default RandomNumber;
