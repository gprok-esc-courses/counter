import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import React, { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)

  function increase() {
    let c = counter
    setCounter(c + 1)
  }

  function decrease() {
    let c = counter
    setCounter(c - 1)
  }

  return (
    <div className="App">
      <Counter value={counter} />
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
