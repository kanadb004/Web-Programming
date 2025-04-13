import React, { useRef, useState } from "react";

const FormWithRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <br />
        <input type="email" placeholder="Email" ref={emailRef} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>
        <strong>Submitted Data:</strong>
      </p>
      <p>Name: {submittedData.name}</p>
      <p>Email: {submittedData.email}</p>
    </div>
  );
};

export default FormWithRef;

