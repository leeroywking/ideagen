import React, {useState} from 'react';
import logo from './lightbulbYellow.png';
import './App.css';
import Pair from './resources/pair.js'
import SlidingModal from './resources/slidingModal.js'
import list from './hardList.js'




function App() {
  const [globalState, setGlobalState]= useState({list})
  function refreshPage(){
    console.log(globalState.list)
    globalState.list.shift()
    console.log(globalState.list)
    setGlobalState(globalState)
    console.log('boop')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={()=> refreshPage()}/>
        <div className="titletext">Your suggestions for today are to think about this!!</div> 
        <p>
        <Pair list={globalState.list} pair={[globalState.list[0],globalState.list[1]]}/>
        <SlidingModal />
        {globalState.list}
        </p>
      </header>
    </div>
  );
}

export default App;
