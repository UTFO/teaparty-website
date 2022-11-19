import React from 'react';
import './PageIntro.css';

function PageIntro(props) {
    return (
    <>
            <h2>{props.title}</h2>
            <p>{props.text}</p>    
    </>
    )
}

export default PageIntro;