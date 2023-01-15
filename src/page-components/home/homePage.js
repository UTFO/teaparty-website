import './homePage.css';
import React, { useState } from 'react';
import Cup from './images/cup.png';
import form from './images/google-form.png';
import cup2 from './images/cup (1).png';
import email from './images/email.png';
import insta from './images/instagram.png';
import ImageSlider from './slider.js';


function Home() {
    

    return <>
        <div>
        <div className="page-intro-container">
            <div className="page-intro-container-text">
                <h2>Welcome to Tea Party</h2>
                <p>Lopem stuff</p>   
            </div>
        
        </div>

        <img src={Cup}/>
        <div className='page-home-higlights'>
            <ImageSlider /> 
        </div>
        <div className='page-home-hyperlinks'>
            <div className='join'>
                <h2>Want to join <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={form} height={30}></img></a></h2>
                <p>Fill out the google form <a href="http://google.com">here</a></p>
            </div>
            <div className='sponsor'>
                <h2>Interested in Sponsoring? <img src={cup2} height={30}></img></h2>
                <p>Send us an email <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={email} height={20}></img></a> or message us on instagram!<a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={insta} height={20}></img></a></p>
            </div>
        </div>
        </div>
    </>
}

export default Home;