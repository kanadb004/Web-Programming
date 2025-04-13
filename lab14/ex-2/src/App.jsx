import React, { useState } from 'react';
import './App.css';

function App() {
  const [loginData, setLoginData] = useState({
    user: '',
    pass: '',
    location: '',
    chosenServer: '',
    userRole: '',
    singleSignOn: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setLoginData((prevData) => ({
        ...prevData,
        singleSignOn: checked
          ? [...prevData.singleSignOn, value]
          : prevData.singleSignOn.filter((item) => item !== value)
      }));
    } else {
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Login form has been submitted!");
  };

  const handleFormReset = () => {
    setLoginData({
      user: '',
      pass: '',
      location: '',
      chosenServer: '',
      userRole: '',
      singleSignOn: []
    });
  };

  return (
    <div style={{ width: "300px", margin: "auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Novell Services Login - 23BCE1216</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="user"
          value={loginData.user}
          onChange={handleInputChange}
        /><br />

        <label>Password:</label>
        <input
          type="password"
          name="pass"
          value={loginData.pass}
          onChange={handleInputChange}
        /><br />

        <label>City of Employment:</label>
        <input
          type="text"
          name="location"
          value={loginData.location}
          onChange={handleInputChange}
        /><br />

        <label>Web server:</label>
        <select
          name="chosenServer"
          value={loginData.chosenServer}
          onChange={handleInputChange}
        >
          <option value="">-- Choose a server --</option>
          <option value="server1">Server 1</option>
          <option value="server2">Server 2</option>
        </select><br />

        <p>Please specify your role:</p>
        <input
          type="radio"
          name="userRole"
          value="Admin"
          onChange={handleInputChange}
        /> Admin<br />
        <input
          type="radio"
          name="userRole"
          value="Engineer"
          onChange={handleInputChange}
        /> Engineer<br />
        <input
          type="radio"
          name="userRole"
          value="Manager"
          onChange={handleInputChange}
        /> Manager<br />
        <input
          type="radio"
          name="userRole"
          value="Guest"
          onChange={handleInputChange}
        /> Guest<br />

        <p>Single Sign-on to the following:</p>
        <input
          type="checkbox"
          name="singleSignOn"
          value="Mail"
          onChange={handleInputChange}
        /> Mail<br />
        <input
          type="checkbox"
          name="singleSignOn"
          value="Payroll"
          onChange={handleInputChange}
        /> Payroll<br />
        <input
          type="checkbox"
          name="singleSignOn"
          value="Self-service"
          onChange={handleInputChange}
        /> Self-service<br />

        <button type="submit">Login</button>
        <button type="button" onClick={handleFormReset}>Reset</button>
      </form>
    </div>
  );
}

export default App;
