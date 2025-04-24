import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import './Counter.css';

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <h2 className="counter-value">Count: {count}</h2>
      <button onClick={increment} className="counter-button">+</button>
      <button onClick={decrement} disabled={count === 0} className="counter-button">-</button>
      <button onClick={reset} className="counter-button reset-button">
        <IoMdRefresh />
      </button>
    </div>
  );
};

export default Counter;
