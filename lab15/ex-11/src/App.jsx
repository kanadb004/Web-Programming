import React from "react";
import Child from "./components/Child";

const App = () => {
  return (
    <div>
      <h1>React Props Validation Example</h1>
      <Child message="This message is passed as a prop!" />
    </div>
  );
};

export default App;
