import React from "react";
import HelloWithoutJSX from "./components/HelloWithoutJSX";
import HelloWithJSX from "./components/HelloWithJSX";
import GreetingMessage from "./components/GreetingMessage";
import FruitList from "./components/FruitList";
import StyledMessage from "./components/StyledMessage";
import SumOfSquares from "./components/SumOfSquares";
import Greeting from "./components/Greeting";
import CurrentDay from "./components/CurrentDay";
import IsPrime from "./components/IsPrime";
import TemperatureConverter from "./components/TemperatureConverter";
import ReverseString from "./components/ReverseString";
import RandomNumber from "./components/RandomNumber";
import LeapYearCheck from "./components/LeapYearCheck";
import UserGreeting from "./components/UserGreeting";

const App = () => (
  <div>
    <HelloWithoutJSX />
    <HelloWithJSX />
    <GreetingMessage />
    <FruitList />
    <StyledMessage />
    <SumOfSquares num1={3} num2={4} />
    <Greeting isMorning={true} />
    <CurrentDay />
    <IsPrime number={7} />
    <TemperatureConverter />
    <ReverseString text="23BCE1265" />
    <RandomNumber />
    <LeapYearCheck year={2024} />
    <UserGreeting firstName="Kanad" lastName="Bhattacharya" />
  </div>
);

export default App;
