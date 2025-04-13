import React, { useState } from "react";
import "./App.css";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

const Content = ({ jokes }) => {
  const [joke, setJoke] = useState("");

  const showJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <main>
      <button onClick={showJoke}>Click me</button>
      <p>{joke}</p>
    </main>
  );
};

const Footer = ({ footerText }) => {
  return (
    <footer>
      <p>{footerText}</p>
    </footer>
  );
};

const App = () => {
  const title = "Random Joke Generator";
  const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It’s impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  ];
  const footerText = "Made by Kanad Bhattacharya";

  return (
    <div className="App">
      <Header title={title} />
      <Content jokes={jokes} />
      <Footer id="footer" footerText={footerText} />
    </div>
  );
};

export default App;
