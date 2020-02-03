import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a React app</p>
        <a
          className="App-link"
          href="https://www.xampol.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          xampol.com
        </a>
      </header>
    </div>
  );
}

export default App;
