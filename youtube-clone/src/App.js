import React from 'react';
import './css/reset.css';

import { Routes,  Route } from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/subscription" element={<Subscription/>} />
    </Routes>
  );
};

export default App;