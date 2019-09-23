import React from 'react';
import logo from './lightbulbYellow.png';
import './App.css';
import Pair from './resources/pair.js'
import SlidingModal from './resources/slidingModal.js'

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
        <SlidingModal />
        </p>
      </header>
    </div>
  );
}

export default App;
