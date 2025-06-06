// import React, { useState } from 'react';
// import Localstorage from './Localstorage';
// import Form from './Table/Form';
// import View from './Table/View';
import Add from './Router/Add';
import View from './Router/View';
import Edit from './Router/Edit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div align="center">
      {/* <Localstorage/> */}
      {/* <Form /> */}
      {/* <br></br> */}
      {/* <View/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;