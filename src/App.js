
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

import {
  Home, About, Team, Events, FAQ, Join, Navbar
} from './page-components/imports.js';

import {
  HomeText, AboutText, TeamText, EventsText, FAQText, JoinText
} from './page-introductions/imports.js'

import PageIntro from './page-introductions/PageIntro.js';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter >
      
        <Navbar/>

        <div className="page-introduction">
          <Routes>

            <Route path="/" element={<PageIntro title={HomeText.title} text={HomeText.text}/>}/>

            <Route path="/about" element={<PageIntro title={AboutText.title} text={AboutText.text}/>}/>
            
            <Route path="/team" element={<PageIntro title={TeamText.title} text={TeamText.text}/>}/>
            
            <Route path="/events" element={<PageIntro title={EventsText.title} text={EventsText.text}/>}/>

            <Route path="/faq" element={<PageIntro title={FAQText.title} text={FAQText.text}/>}/>
          
            <Route path="/join" element={<PageIntro title={JoinText.title} text={JoinText.text}/>}/>

          </Routes>
        </div>
        
        <div id="page-component">
          <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About/>}/>
            
            <Route path="/team" element={<Team/>}/>
            
            <Route path="/events" element={<Events/>}/>

            <Route path="/faq" element={<FAQ/>}/>
          
            <Route path="/join" element={<Join/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
