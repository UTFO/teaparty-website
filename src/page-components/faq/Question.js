import "./Question.css";

import React from "react";
import { useState } from "react";
function Question (props) {

    const [clicked, setClicked] = useState(false);

    const toggle = () =>{
        setClicked(!clicked);
    };
    return(

    <div className = 'question'>    
        <div className='title' onClick={() => toggle()}>
            <h1>{props.question}</h1>
            <span>{clicked ? '-' : '+'}</span>
        </div>
        <div className={clicked ? 'expand' : 'collapse'}>
            <h3>{props.answer}</h3>
        </div>
    </div>           

    );
}

export default Question;