import React, { useContext } from 'react'
import { countercontex } from './Usecontext/CounterContex';

const Count = () => {
  let { count, increment, decrement, reset } = useContext(countercontex);
  return (
    <div align="center">
      <h1>Counter App</h1>
      <h2>Count :- {count}</h2>
      <button onClick={() => increment()}>+</button>&nbsp;&nbsp;&nbsp;
      <button disabled={count == 0} onClick={() => decrement()}>-</button>&nbsp;&nbsp;&nbsp;
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default Count
