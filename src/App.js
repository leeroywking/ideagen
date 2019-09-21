import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pair from './resources/list.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Your suggestions for today are to combine 
        <Pair />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          

        </a>
      </header>
    </div>
  );
}

export default App;
