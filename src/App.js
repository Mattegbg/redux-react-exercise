import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './action/counterAction';
import  ViewCounter  from './components/ViewCounter';

function App() {
  const dispatch = useDispatch(); // Initierar useDispatch()

  function handleDecrease() {
    dispatch(decrement(1));
  }

  function handleIncrease() {
    dispatch(increment(1));
  }


  return (
    <div className="App">
      <h2>Räknare</h2>
      <ViewCounter />
      <button onClick={ handleIncrease }>Öka</button>
      <button onClick={ handleDecrease }>Minska</button>
    </div>
  );
}

export default App;
