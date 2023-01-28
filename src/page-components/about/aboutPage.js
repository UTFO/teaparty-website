import './aboutPage.css';
import { useState } from 'react';

import {
    HomeText, AboutText, TeamText, EventsText, FAQText, JoinText
  } from '../page-introductions/imports.js'

import Paper from './images/paper.png';
import PageIntro from '../page-introductions/PageIntro.js';


function Tab(props) {
    return <div className="about-tab" id={props.active ? "active" : "not-active"} onClick={() => {props.setSectionActive(props.section["id"])}}>
        <p>{props.section["name"]}</p>
    </div>
}
function About() {
    const [sectionActive, setSectionActive] = useState(0);

    var sectionInfo = require('./aboutSection.json');
    console.log(sectionInfo);
    
    return <>
    <div className='page-introduction'>
        <PageIntro title={AboutText.title} text={AboutText.text}/>
    </div>
    <div className='page-component'>
        
        <div className='page-about'>
            <div className='page-about-tabs'>
                {sectionInfo.map((section) => {
                    return <Tab section={section} active={section["id"] == sectionActive} setSectionActive={setSectionActive}/>
                })}
            </div>
            <div className='page-about-menu'>
                <img src={Paper}/>
            </div>
        </div>
        
    </div>
    
    </>
}

export default About;
