import React, {useState} from 'react';
import logo from './lightbulbYellow.png';
import './App.css';
import Pair from './resources/pair.js'
import SlidingModal from './resources/slidingModal.js'
import list from './list.js'
import Context from './resources/context.js'



function App() {
  const [globalState, setGlobalState]= useState({list})
  function shiftOff(){
    globalState.list.shift()
    setGlobalState(globalState)
    console.log(globalState)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={()=> shiftOff()}/>
        <div className="titletext">Your suggestions for today are to think about this!!</div> 
        <p>
        <Context>
        <Pair list={globalState.list} pair={[globalState.list[0],globalState.list[1]]}/>
        <SlidingModal />
        </Context>
        {globalState.list}
        </p>
      </header>
    </div>
  );
}

export default App;
