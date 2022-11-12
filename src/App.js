
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'

import {
  Home, About, Team, Events, FAQ, Join, Navbar
} from './pages/imports.js';


function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>
        
        <Route path="/team" element={<Team/>}/>
        
        <Route path="/events" element={<Events/>}/>

        <Route path="/faq" element={<FAQ/>}/>
      
        <Route path="/join" element={<Join/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
