import './homePage.css';
import React, { useState } from 'react';
import Form from './images/google-form.png';
import Cup2 from './images/cup (1).png';
import Email from './images/email.png';
import Insta from './images/instagram.png';
import ImageSlider from './ImageSlider';
import slide2 from './images/slide2.jpg';
import { SliderData } from './SliderData';


function Home() {
    return (<>
     <div className="content-container" >
            <svg viewBox="0 0 450 35">
                <path d="M-100,-37 C2,55 450,55 550,-37" fill="white"/>
            </svg>

            <h1 className="event-header">
                Check Our Event Highlights!
            </h1>
            
            <div className="image-gallery">
                <div className="image-area">
                    <img className="internal-image" src={slide2}></img>
                </div>
                <div className='image-text-area'>
                    
                </div>
                <div>

                </div>
            </div>
           <svg viewBox="0 0 450 25"> 
             <path d="M-100,70 C2,-22 450,-22 550,70" fill="white"/>
            </svg> 
            
            
    </div>
    </>);
}
    
export default Home;