
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

import {
  Home, About, Team, Events, FAQ, Navbar, Footer, adminabout, adminevents, adminfaq, adminteam, adminhome, adminlogin
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

            <Route path="/admin" element={<adminlogin/>}>
              <Route path="/admin/home" element={<adminhome/>}/>
              <Route path="/admin/events" element={<adminevents/>}/>
              <Route path="/admin/faq" element={<adminfaq/>}/>
              <Route path="/admin/team" element={<adminteam/>}/>
              <Route path="/admin/about" element={<adminabout/>}/>
            </Route>

          </Routes>

    
      </BrowserRouter>
    </div>
  );
}

export default App;
