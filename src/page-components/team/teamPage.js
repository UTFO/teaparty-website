import Instagram_Icon from './images/icons/instagram-icon.png';
import Twitter_Icon from './images/icons/twitter-icon.png';
import Linkedin_Icon from './images/icons/linkedin-icon.png';

import Members from './toDeprecate/members_import.js';

import './teamPage.css';

function ActiveTeamCard(props) {
    return (<div className="page-team-card-container">
        <div className="page-team-card-second-container">
            <h1>{props.name}</h1>
            <h2>{props.role}</h2>
            <img src={props.image} alt={props.name + "'s Picture"}/>
        </div>
        <div className="page-team-card-socials">
            <div style={{"--i": 100}}><img  src={Instagram_Icon}/></div>
            <div style={{"--i": 88}}><img  src={Twitter_Icon}/></div>
            <div style={{"--i": 112}}><img  src={Linkedin_Icon}/></div>
        </div>
    </div>)
}


function Team() {
    

    return <>
        
        {
            Members.map((member)=> {
                return <ActiveTeamCard name={member.name} role={member.role} image={member.image}/>
            })
        }

    </>
}

export default Team;