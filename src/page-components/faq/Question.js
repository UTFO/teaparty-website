import React from "react";

function Question (props) {
    return(

            <div className="question">
                <h1 className="header">{props.question}</h1>
                <h3 className="answer">{props.answer}</h3>
            </div>

    );
}

export default Question;