import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Notes = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);  

    function startTimer() {
        if (!timerRef.current) { // Prevent multiple intervals
            timerRef.current = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    function resetTimer() {
        stopTimer();
        setTime(0);
    }

    const today = new Date().getDay();
    const fruits = ["Apple", "Banana", "Orange"];
    const text = "madam";
    const reversed = text.split("").reverse().join("");
    const isPalindrome = text.toLowerCase() === reversed.toLowerCase();

    return (
        <>
            <div>
                <h2>Today is day {today} of the week.</h2>

                <h3>Fruits List:</h3>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>

                <h3>Palindrome Check:</h3>
                <p>Original: {text}</p>
                <p>Reversed: {reversed}</p>
                <p>Is Palindrome? {isPalindrome ? "Yes" : "No"}</p>

                <h3>Timer: {time} seconds</h3>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>

            <div>
                <Router>
                    <nav>
                        <Link to="/">Home</Link> | <Link to="/about">About</Link>
                    </nav>

                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/about" element={ <About /> } />
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default Notes;
