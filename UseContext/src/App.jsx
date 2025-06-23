import React from 'react';
import Count from './Count';
import CounterProvider  from './Usecontext/CounterContex';

function App() {
  return (
    <CounterProvider>
      <Count />
    </CounterProvider>
  );
}

export default App;
