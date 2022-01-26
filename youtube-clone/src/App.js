import React from 'react';
import './css/reset.css';

import { Routes,  Route } from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Search from './pages/Search';


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/subscription" element={<Subscription/>} />
      <Route path="/search" element={<Search/>}>
        <Route path=":search_query"/>
      </Route>
    </Routes>
  );
};

export default App;