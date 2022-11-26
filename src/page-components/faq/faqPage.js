import React from 'react';
import QuestionComponent from './QuestionComponent';
import FaqIntro from './faqPageIntro';
import "./faqPage.css";
import Socials from './socials';

function FAQ() {
    return (
        <div className='page'>
            <Socials/>
            <FaqIntro/>
            <QuestionComponent/>
        </div>
    );
}

export default FAQ;