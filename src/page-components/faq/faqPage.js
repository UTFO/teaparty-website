import React from 'react';
import "./faqPage.css";
import Socials from './socials';
import ColumnOne from './questionColumnOne';
import ColumnTwo from './questionColumnTwo';

import {
    HomeText, AboutText, TeamText, EventsText, FAQText, JoinText
} from '../page-introductions/imports.js'

import PageIntro from '../page-introductions/PageIntro.js';


function FAQ() {
    return (<>
    <div className='page-introduction'>
        <PageIntro title={FAQText.title} text={FAQText.text}/>
    </div>
    <div className='page-component'>
            <div className='page'>
                <ColumnOne></ColumnOne>
                <ColumnTwo></ColumnTwo>
            </div>
        </div>
    </>
        
    );
}

export default FAQ;