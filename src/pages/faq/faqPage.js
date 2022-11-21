import React from 'react';
import QuestionComponent from './QuestionComponent';
import FaqIntro from './faqPageIntro';
import "./faqPage.css";

function FAQ() {
    return (
        <div className='page'>
            <FaqIntro/>
            <QuestionComponent/>
        </div>
    );
}

export default FAQ;