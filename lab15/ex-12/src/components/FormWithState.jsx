import React, { useState } from "react";

const FormWithState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Submitted:", { name, email });
  };

  return (
    <div>
      <h2>Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>
        <strong>Live Preview:</strong>
      </p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default FormWithState;
