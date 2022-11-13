import React from "react";

function Question (props) {
    return(
        <div className="question">
            <h1>{props.question}</h1>
            <h3>{props.answer}</h3>
        </div>
    );
}

export default Question;