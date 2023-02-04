import "./questionColumnOne.css"
import React from "react"
import Question from "./Question.js"

function ColumnOne(){
    return(
        <div className="questions">
            <Question question = "Who are we?" answer = "We are a group of tea enjoyers that use the drink to kindle all sorts of events" />
            <Question question = "Why do we require verification?" answer = "Even though we would love to have a big community, we want to make sure everyone feels safe at our in person events." />
        </div>
    )
}

export default ColumnOne