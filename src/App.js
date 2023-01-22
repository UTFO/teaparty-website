
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

import {
  Home, About, Team, Events, FAQ, Navbar, Footer
} from './page-components/imports.js';



function App() {
  return (
    <div className="main-container">
      <BrowserRouter >
      
        <Navbar/>
        
          <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>
            
            <Route path="/team" element={<Team/>}/>
            
            <Route path="/events" element={<Events/>}/>

            <Route path="/faq" element={<FAQ/>}/>

          </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
