import "./questionColumn.css"
import React from "react"
import Question from "./Question.js"

function Column(){

    var questionList = require('../../data/texts/FAQ.json');
    console.log(questionList);

    return(
        <div className="questions">
            {questionList.map((question) => {
                return <Question question={question['question']} answer={question['answer']}/>
            })}
        </div>
    )
}

export default Column