import React from 'react';
import logo from './lightbulbYellow.png';
import './App.css';
import Pair from './resources/pair.js';
import SlidingModal from './resources/slidingModal.js';

function refreshPage() {
  window.location.reload();
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* Need to implement context for this element  */}
        <img
          src={logo}
          className='App-logo'
          alt='logo'
          onClick={() => refreshPage()}
        />
        <div className='titletext'>
          Your suggestions for today are to think about this!!
        </div>
        <p>
          <Pair />
          <SlidingModal />
        </p>
      </header>
    </div>
  );
}

export default App;
