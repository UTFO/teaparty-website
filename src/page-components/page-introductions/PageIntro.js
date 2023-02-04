import React from 'react';
import './PageIntro.css';
import Cup from './images/cup.png';
import Smoke from '../home/components/Smoke'

function PageIntro(props) {
    return (
    <>
        <div className="page-intro-container">
            <Smoke/>
            <div className="page-intro-container-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>   
            </div>
        
        </div>

        <img src={Cup}/>
    </>

    
    )
}

export default PageIntro;