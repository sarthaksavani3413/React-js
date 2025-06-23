import React from 'react';
import Add from './crud/Add';
import View from './crud/View';

const App = () => {
  return (
    <div className="App">
      <header>
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
        <h1>Google Keep</h1>
      </header>
      <Add />
      <View />
      <footer>
        <p>Copyrights 2025</p>
      </footer>
    </div>
  );
};

export default App;
