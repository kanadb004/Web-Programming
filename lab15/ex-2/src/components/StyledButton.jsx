import React from "react";

function StyledButton() {
  const buttonStyle = {
    backgroundColor: "lightgreen",
    padding: "10px 20px",
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <div>
      <button style={buttonStyle}>Click Me</button>
    </div>
  );
}

export default StyledButton;