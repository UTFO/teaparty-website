import React from 'react';
import './PageIntro.css';

function PageIntro(props) {
    return (
    <div className="page-intro-container">
            <h2>{props.title}</h2>
            <p>{props.text}</p>    
    </div>
    )
}

export default PageIntro;