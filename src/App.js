import React from 'react';
import Home from './pages/Home';
import "./App.css"
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
