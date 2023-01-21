import './homePage.css';
import React, { useState } from 'react';
import Form from './images/google-form.png';
import Cup2 from './images/cup (1).png';
import Email from './images/email.png';
import Insta from './images/instagram.png';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


function Home() {
    return (<>
     <div>
            <div className="page-intro-container">
                <div className="page-intro-container-text">
                    <h2>Welcome to Tea Party</h2>
                    <p>Lopem stuff</p>   
                </div>  
                <div className='image-cup'></div>       
            </div>

            <div className='page-home-higlights'>
                    <ImageSlider slides={SliderData} />
            </div>

            <div className='page-home-hyperlinks'>
                <div className='join'>
                    <h2>Want to join <a href="https://google.com" target="_blank" rel="noreferrer">
                    <img src={Form} height={30}></img></a></h2>
                    <p>Fill out the google form <a href="http://google.com">here</a></p>
                </div>
                <div className='sponsor'>
                    <h2>Interested in Sponsoring? <img src={Cup2} height={30}></img></h2>
                    <p>Send us an email <a href="https://google.com" target="_blank" rel="noreferrer">
                    <img src={Email} height={20}></img></a> or message us on instagram!<a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <img src={Insta} height={20}></img></a></p>
                </div>
            </div>
    </div>
    </>);
}
    
export default Home;