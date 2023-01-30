import './aboutPage.css';
import { useState } from 'react';

import {
    HomeText, AboutText, TeamText, EventsText, FAQText, JoinText
  } from '../page-introductions/imports.js'

import Paper from './images/paper.png';
import PageIntro from '../page-introductions/PageIntro.js';

var height = 80;
var width = 30;

function getTextDimensions(text) {
    var tag = document.createElement('p')
    tag.classList.add("page-about-text")
    tag.style.position = 'absolute'
    tag.style.left = '-99in'
    tag.style.whiteSpace = 'nowrap'
    tag.innerHTML = text
    document.body.appendChild(tag)
    var width = tag.clientWidth
    var height = tag.clientHeight;
    document.body.removeChild(tag)
    return {"width": width, "height": height};
}

function getTextLines(textWidth) {
    return textWidth / (window.innerWidth * width / 100);
}

function getPageLines(textHeight) {
    return window.innerHeight * height * 0.6 / 100 / textHeight;
}

function Tab(props) {
    
    

    return <div className="about-tab" id={props.active ? "active" : "not-active"} onClick={() => {props.setSectionActive(props.section["id"])}}>
        <p>{props.section["name"]}</p>
    </div>

}

function Page(props) {
    const [currentPage, setCurrentPage] = useState(0);

    var string = props.section["text"].split('\n');

    return <>
            <h2>{props.section["name"]}</h2>
            <div className="page-about-text">
            {string.map((text) => {
                return <p>
                    {text}
                </p>
            })}
            </div>
            

        </>
}


function About() {
    const [sectionActive, setSectionActive] = useState(0);

    var sectionInfo = require('./aboutSection.json');

    
    return <>
    <div className='page-introduction'>
        <PageIntro title={AboutText.title} text={AboutText.text}/>
    </div>
    <div className='page-component'>
        
        <div className='page-about' style={{"--height": height + 'vh', "--width": width + 'vw'}}>
            <div className='page-about-tabs'>
                {sectionInfo.map((section) => {
                    return <Tab section={section} active={section["id"] == sectionActive} setSectionActive={setSectionActive}/>
                })}
            </div>
            <div className='page-about-menu'>
                <img src={Paper}/>
                <div className="page-about-page">
                    {sectionInfo.map((section) => {
                        if(sectionActive == section["id"])
                            return <Page section={section} />
                        
                    })}
                </div>
            </div>
        </div>
        
    </div>
    
    </>
}

export default About;
