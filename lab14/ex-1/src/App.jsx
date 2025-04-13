import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import React from 'react';
import './App.css';
import srcImage from "./Images/react-logo.png";

function App() {
  return (
    <div>
      <h2>Image from Public Folder:</h2>
      <img src="/Images/banana.jpg" alt="Public Image" width="200" />

      <h2>Image from Src Folder:</h2>
      <img src={srcImage} alt="Src Image" width="200" />
    </div>
  );
}

export default App;

