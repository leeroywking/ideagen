import React from 'react';
import logo from './lightbright.png';
import './App.css';
import Pair from './resources/list.js'

function refreshPage(){
  window.location.reload();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={()=> refreshPage()}/>
        <p>
        Your suggestions for today are to combinate 
        <Pair />
        </p>
      </header>
    </div>
  );
}

export default App;
