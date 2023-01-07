import Instagram_Icon from './images/icons/instagram-icon.png';
import Twitter_Icon from './images/icons/twitter-icon.png';
import Linkedin_Icon from './images/icons/linkedin-icon.png';

import Arrow_Icon from './images/icons/Arrow.png';

import Members from './toDeprecate/members_import.js';

import Rope from './images/objects/Rope.png';
import Teabag from './images/objects/Teabag.png';

import { useState } from 'react';

import './teamPage.css';
import React from 'react';
import { waitFor } from '@testing-library/react';

var borderActiveColor = '#b3ffc3';
var cardActiveColor = '#e1ffda';

var borderInactiveColor = '#ececec';
var cardInactiveColor = 'rgba(0, 0, 0, 0)';

var sizeScale = 0.9;
let displaySide = 2+1; 
let memberArray = [];

let prev = 0;
let currentRotate = 0;
while(memberArray.length < 3 * (displaySide * 2 + 1)) 
    memberArray = [...memberArray, ...Members];

function TeamCard(props) {

    var cardColor = props.active ? cardActiveColor : cardInactiveColor;
    var borderColor = props.active ? borderActiveColor : borderInactiveColor;

    return (<div style={{"--size": props.size, "--x": props.index, "--sizeScale": sizeScale, "opacity": 0 + !props.hide}} className="page-team-card-container">

        <div className="page-team-card-rotate-self">
            <div style={{"--cardColor": cardColor}} className="page-team-card-second-container">
                <h1 style={{"opacity": 0.5 + props.active}}>{props.name}</h1>
                <h2 style={{"opacity": 0.5 + props.active}}>{props.role}</h2>
                <img style={{"--borderColor": borderColor}} src={props.image} alt={props.name + "'s Picture"}/>
            </div>
            { props.active ? <div style={{"opacity": 1}} className="page-team-card-socials">
                <div style={{"--i": 0}}><img  src={Instagram_Icon}/></div>
                <div style={{"--i": -18}}><img  src={Twitter_Icon}/></div>
                <div style={{"--i": 18}}><img  src={Linkedin_Icon}/></div>
            </div>
            : <div style={{"opacity": 0}} className="page-team-card-socials">
            <div style={{"--i": 0}}><img  src={Instagram_Icon}/></div>
            <div style={{"--i": 0}}><img  src={Twitter_Icon}/></div>
            <div style={{"--i": 0}}><img  src={Linkedin_Icon}/></div>
        </div>}
            
            
        </div>
    
    </div>)
}

function TeaCard(props) {

    let current = props.index;

    return (
        <div className="page-team-teabag">
            <img id="rope" src={Rope}/>
            <div id="teabag">
                    <img style={{transform: ("rotateY(" + (currentRotate) + "deg)")}} id="teabag-img" src={Teabag}/>
                    <div>
                        <section><p className="prev">{memberArray[prev]["message"]}</p></section>
                        <section><p className="current">{memberArray[current]["message"]}</p></section>
                    </div>
            </div>
        </div>
    )
}


function Arrow(props) {

    const [preventClick, setPreventClick] = useState(false);
    const waitFor = (delay) => new Promise(resolve => setTimeout(resolve, delay));

    const slide = async (up) => {
        setPreventClick(true);
        
        prev = props.active;
        if(currentRotate==180)
            currentRotate = 0;
        else
            currentRotate = 180;

        document.getElementsByClassName('prev')[0].classList.add('spinPrev-animation')
        document.getElementsByClassName('current')[0].classList.add('spinCurrent-animation')
        
        if(up) {
            if(props.active == memberArray.length - 1)
                props.setActive(0);
            else 
                props.setActive(props.active+1);
        } else {
            if(props.active == 0)
                props.setActive(memberArray.length-1);
            else 
                props.setActive(props.active-1);
        }    

        await waitFor(500).then();

        document.getElementsByClassName('prev')[0].classList.remove('spinPrev-animation')
        document.getElementsByClassName('current')[0].classList.remove('spinCurrent-animation')

        setPreventClick(false)
    }

    return (
    <div style={{"--x": props.index + (props.up ? -1 : 1), "--sizeScale": sizeScale}} id="arrow">
        <button disabled={preventClick} style={{"--up": props.up ? 1 : -1}} onClick={props.up ? () => {slide(true)} : () => {slide(false)}}>
            <img src={Arrow_Icon}/>
        </button>
    </div>
    );
}

function Team() {
     //Number of displayed people above or below center;
    const [active, setActive] = useState(Math.round((memberArray.length-1)/2));


    
    var TeamCards = [<Arrow index={displaySide+1} up={true} active={active} setActive={setActive}/>, ...memberArray.map((member, index)=> {
        let position = Math.abs(active-index);
        let above = 1;
        if(active > index)
            above =-1;
            
        if(active > memberArray.length-1  - displaySide) { //Where member.length - displaySide < active < member.length
            let extraRange = displaySide - (memberArray.length-1 - active);
            if(index < extraRange) {
                position = displaySide - extraRange + index + 1;
                above = 1;
            }
        } else if (active < displaySide) { //Where displayside > active > 0
            let extraRange = displaySide - active;
            if(index > memberArray.length-1 - extraRange) {
                position = active + memberArray.length - index;
                above = -1;
            }
        }

        if(position <= displaySide)
            return <TeamCard 
                    name={member.name} 
                    role={member.role} 
                    image={member.image} 
                    active={active - index == 0} 
                    size={sizeScale * (1 - 1*position/(displaySide * 2 + 1))}
                    index={above * position}
                    hide={position == displaySide}/>
        else
            return <></>
    }), <Arrow index={-displaySide-1} up={false} active={active} setActive={setActive}/>];


    return <div className="page-team">
        <div className="page-team-container">
            <div className="page-team-second">
                {TeamCards}
            </div>
            {<TeaCard index={active}/>}

        </div>
        
        

    </div>
}

export default Team;