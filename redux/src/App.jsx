import React from 'react';
import Counter from './redux/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Crud/Add';
import View from './Crud/View';
import Edit from './Crud/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
