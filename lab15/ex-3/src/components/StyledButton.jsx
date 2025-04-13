import React from "react";

function StyledButton() {
  return (
    <>
      <style>
        {`
          .my-button {
            background-color: red ;
            padding: 10px 20px;
            fontSize: 20px;
          }
        `}
      </style>

      <div>
        <button className="my-button">Click Me</button>
      </div>
    </>
  );
}

export default StyledButton;