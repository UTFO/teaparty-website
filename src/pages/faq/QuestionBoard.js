import './QuestionBoard.css;
import React from 'react';
import Question from './question';

function QuestionBoard() {

    return( 
        <div className='questions'>
            <Question question = "Who are we?" answer = "We are a group of tea enjoyers that use te drink to kindle all sorts of events" />
            <Question question = "Why do we require verification?" answer = "Even though we would love to have a big community, we want to make sure everyone feels safe at our in person events." />
            <Question question = "In which platform will online events be held?" answer = "Our online events will be held on our discord server."/>
            <Question question = "Where will in person events be held?" answer = "We are planning to stay within the GTA. However, feel free to recommend any location you see fit."/>
        </div>
        
    );
}

export default QuestionBoard;