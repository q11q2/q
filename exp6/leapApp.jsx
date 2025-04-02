import React, { useState } from "react";
import "./App.css";

function App() {
    const [year, setYear] = useState("");
    const [result, setResult] = useState("");

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const checkLeapYear = () => {
        if (!year) {
            setResult("Please enter a valid year.");
            return;
        }
        setResult(isLeapYear(year) ? `${year} is a Leap Year.` : `${year} is NOT a Leap Year.`);
    };

    return (
        <div className="leap-year-checker">
            <h2>Leap Year Checker</h2>
            <label>Enter a Year:</label>
            <input 
                type="number" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                placeholder="Enter year"
            />
            <button onClick={checkLeapYear}>Check</button>
            <p>{result}</p>
        </div>
    );
}

export default App;

