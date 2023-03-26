
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

import {
  Home, About, Team, Events, FAQ, Navbar, Footer
} from './page-components/imports.js';

import Admin from './admin-pages/admin.js'


function App() {
  return (
    <div className="main-container">
      <BrowserRouter >
      

        
          <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>
            
            <Route path="/team" element={<Team/>}/>
            
            <Route path="/events" element={<Events/>}/>

            <Route path="/faq" element={<FAQ/>}/>

            <Route path="/admin" element={<Admin/>}/>

          </Routes>

    
      </BrowserRouter>
    </div>
  );
}

export default App;
