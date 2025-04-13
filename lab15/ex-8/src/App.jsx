import React, { useRef } from "react";

function FocusForm() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Focus Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputField">Enter text: </label>
          <input
            ref={inputRef}
            type="text"
            id="inputField"
            placeholder="Type something..."
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="button" onClick={handleFocus}>
            Focus Input
          </button>
          <button type="submit" style={{ marginLeft: "10px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FocusForm;
