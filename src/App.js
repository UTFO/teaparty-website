
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

import {
  Home, About, Team, Events, FAQ, Navbar, Footer, AdminAbout, AdminEvents, AdminFaq, AdminTeam, AdminHome, AdminLogin
} from './page-components/imports.js';



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

            <Route path="/admin" element={<AdminLogin/>}/>
            <Route path="/admin/home" element={<AdminHome/>}/>
            <Route path="/admin/events" element={<AdminEvents/>}/>
            <Route path="/admin/faq" element={<AdminFaq/>}/>
            <Route path="/admin/team" element={<AdminTeam/>}/>
            <Route path="/admin/about" element={<AdminAbout/>}/>

          </Routes>

    
      </BrowserRouter>
    </div>
  );
}

export default App;
