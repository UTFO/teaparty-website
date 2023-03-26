import './navbar.css';

import {
    club_logo, email_logo, instagram_logo, instagram_path
} from './images/import.js';

function MenuButton(props) {
    return (
        <a className="navbarText" href={props.path}>
            <p>{props.text}</p>
        </a>
    )
}

function ContactButton(props) {
    return (
        <a href={props.path} target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt={props.text}/>
        </a>
    )
}


export function Navbar() {
    
    

    return <>
        <div className="navbar-menu">
            <section className="club-icon">
                <a href="/">
                    <img src={club_logo} alt="Club Icon"/>
                </a>
            </section>

            <svg>
                <rect/>
            </svg>

            <MenuButton text="About" path="/about"/>
            <MenuButton text="Team" path="/team"/>
            <MenuButton text="Events" path="/events"/>
            <MenuButton text="FAQ" path="/faq"/>
            <a className="navbar-join" href="https://forms.gle/StZ1cLbSVPw7hsT67" target="_blank">
                Join Us
            </a>
        </div>

    </>
}

export const ContactBar = () => {
    
    var email = require('../../data/texts/Links.json').email;
    
    return (
        <div className="navbar-contact">
            <ContactButton image={email_logo} text="Email" path={"mailto:"+email}/>
            <ContactButton image={instagram_logo} text="Instagram" path={instagram_path}/>
        </div>
    )
}

export const TopBar = () => {
    return (
        <div className="navbar-menu">
            <section className="club-icon">
                <a href="/">
                    <img src={club_logo} alt="Club Icon"/>
                </a>
            </section>

            <svg>
                <rect/>
            </svg>

            <MenuButton text="About" path="/about"/>
            <MenuButton text="Team" path="/team"/>
            <MenuButton text="Events" path="/events"/>
            <MenuButton text="FAQ" path="/faq"/>
            <a className="navbar-join" href="https://forms.gle/StZ1cLbSVPw7hsT67" target="_blank">
                Join Us
            </a>
        </div>
    )
}