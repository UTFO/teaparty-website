import React from 'react';
import QuestionComponent from './QuestionComponent';
import FaqIntro from './faqPageIntro';
import "./faqPage.css";
import Socials from './socials';

import {
    HomeText, AboutText, TeamText, EventsText, FAQText, JoinText
} from '../page-introductions/imports.js'

import PageIntro from '../page-introductions/PageIntro.js';


function FAQ() {
    return (<>
    <div className='page-introduction'>
        <PageIntro title={FAQText.title} text={FAQText.text}/>
    </div>
    <div className='page-components'>
            <div className='page'>
                <Socials/>
                <FaqIntro/>
                <QuestionComponent/>
            </div>
        </div>
    </>
        
    );
}

export default FAQ;