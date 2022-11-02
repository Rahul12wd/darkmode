import React, { useState } from "react";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
        <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
        <div className="Content">
        <h2>Hello Im Rahul Phad</h2>
        <p>Frontend developer </p>

        <h2>Projects</h2>
        <p>Github Finder</p>
        <p>Food Website</p>

        <h2>Tech Skills</h2>
        <p>Java</p>
        <p>DSA</p>
        <p>React</p>
        </div>
      </div>
    </div>
  );
}

export default App;
