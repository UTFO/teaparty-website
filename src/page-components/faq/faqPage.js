import React from 'react';
import "./faqPage.css";
import Column from './questionColumn';

import {
    HomeText, AboutText, TeamText, EventsText, FAQText, JoinText
} from '../page-introductions/imports.js'

import PageIntro from '../page-introductions/PageIntro.js';


function FAQ() {
    return (<>
    <div className='page-introduction'>
        <PageIntro title={FAQText.title} text={FAQText.text} page="faq"/>
    </div>
    <div className='page-component'>
            <div className='page'>
                <Column/>
            </div>
        </div>
    </>
        
    );
}

export default FAQ;