import './homePage.css';
import React, { useState } from 'react';
import Form from './images/google-form.png';
import Cup2 from './images/cup (1).png';
import Email from './images/email.png';
import Insta from './images/instagram.png';
import ImageSlider from './ImageSlider';
import slide2 from './images/slide1.png'
import { SliderData } from './SliderData';
import Carousel from 'react-material-ui-carousel';
import Arrow_Icon from './images/Arrow.png'
import {ContactBar, TopBar} from '../navbar/navbar';
import WelcomeMessage from './components/WelcomeMessage';
import HighlightsButton from './components/HighlightsButton';
import { Navbar, Footer } from '../imports.js';
function Home() {

    var email = require('../../data/texts/Links.json').email;


    return (<>
    <Navbar/>
    <div className="welcome-container">
        <ContactBar />
        <WelcomeMessage />
        <HighlightsButton />
    </div>


     <div className="content-container" id="highlights" >
            <svg viewBox="0 0 450 35">
                <path d="M-100,-37 C2,55 450,55 550,-37 L550,55 L-100,55" fill="#c4df9b"/>
            </svg>
            <div className="colorFill">
                <h1 className="event-header">
                    Check out our event highlights!
                </h1>
                <Carousel
                    fullHeightHover={false}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'transparent',
                            borderRadius: 0,
                            
                        }
                    }}
                    animation={"slide"}
                    navButtonsAlwaysVisible={true}
                    NextIcon={<img src={Arrow_Icon} className='next'/>}
                    PrevIcon={<img src={Arrow_Icon} className="prev"/>}>
                    {
                        SliderData.map((item,index) => <ImageSlider data={item}/>)
                    }
                </Carousel>
                <div className="slider"></div>
            </div>
           <svg viewBox="0 0 450 25"> 
             <path d="M-100,70 C2,-22 450,-22 550,70 L 550,-22 L -100, -22" fill="#c4df9b"/>
            </svg> 
            
            
    </div>

    <div className='page-home-hyperlinks'>
        <div className='page-home-join'>
            <h2>Want to join? <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={Form} height={30}></img></a></h2>
            <p>Fill out the google form <a href="https://forms.gle/StZ1cLbSVPw7hsT67">here</a></p>
        </div>
        <div className='page-home-sponsor'>
            <h2>Interested in Sponsoring? <img src={Cup2} height={30}></img></h2>
            <p>Send us an email &nbsp; <a href={"mailto:"+email} target="_blank" rel="noreferrer">
            <img src={Email} height={20}></img></a> &nbsp; or message us on instagram! &nbsp;<a href={email} target="_blank" rel="noreferrer">
            <img src={Insta} height={20}></img></a></p>
        </div>
    </div>
    <Footer/>
    </>);
}
    
export default Home;