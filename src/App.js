import React from 'react';
import logo from './lightbulbYellow.png';
import './App.css';
import Pair from './resources/pair.js'

function refreshPage(){
  window.location.reload();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={()=> refreshPage()}/>
        <p>
        Your suggestions for today are to think about this!! 
        <Pair />
        </p>
      </header>
    </div>
  );
}

export default App;
