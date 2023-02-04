import "./questionColumnTwo.css"
import React from "react"
import Question from "./Question.js"

function ColumnTwo(){
    return(
        <div className="questions">
            <Question question = "In which platform will online events be held?" answer = "Our online events will be held on our discord server."/>
            <Question question = "Where will in person events be held?" answer = "We are planning to stay within the GTA. However, feel free to recommend any location you see fit."/>
        </div>
    )
}

export default ColumnTwo