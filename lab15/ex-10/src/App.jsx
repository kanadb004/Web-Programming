import React from "react";

// Child component
function Child({ message }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from parent: {message}</p>
    </div>
  );
}

// Parent component
function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child message="Hello from Parent!" />
    </div>
  );
}

export default Parent;
