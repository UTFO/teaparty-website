import './aboutPage.css';
import { useState } from 'react';

import { AboutText } from '../page-introductions/imports.js'

import Paper from './images/paper.png';
import PageIntro from '../page-introductions/PageIntro.js';
import { Navbar, Footer } from '../imports.js';

var height = 80;
var width = 30;

function Tab(props) {

    return <div className="about-tab" id={props.active ? "active" : "not-active"} onClick={() => {props.setSectionActive(props.section["id"])}}>
        <p>{props.section["name"]}</p>
    </div>

}

function Page(props) {
    var string = props.section["text"].split(/(\n)|({+.*}+)/);

    var imageMatch = /{(.*)}/

    var htmlString = [];
    console.log(string);

    for(let i = 0; i < string.length; i++) {
        if(string[i] == null)
            continue
        var imageMatches = string[i].match(imageMatch);
        console.log(imageMatches);

        if(imageMatches != null) {
            htmlString[i] = <img id="page-about-page-image" src={require('../../data/' + props.section[imageMatches[1]])}/>
        } else {
            htmlString[i] = <p>{string[i]}</p>
        }
    }

    console.log(htmlString);

    return <>
            <h2>{props.section["name"]}</h2>
            <div className="page-about-text">
                {htmlString.map((text) => {
                    return text;
                })}
            </div>
            

        </>
}


function About() {
    const [sectionActive, setSectionActive] = useState(0);

    var sectionInfo = require('../../data/texts/About.json');

    
    return <>
    <Navbar/>
    <div className='page-introduction'>
        <PageIntro title={AboutText.title} text={AboutText.text} page="about"/>
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
    <Footer/>
    </>
}

export default About;
