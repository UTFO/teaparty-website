import React from "react";
import Instagram from "./instagram_logo.png";

function Socials(){
    return(

        <div className="instagram">
            <a href="https://www.instagram.com/uoftea.party/" target="_blank" rel="noreferrer">
                <img src={Instagram} width="25" height="25" alt=""></img></a>
        </div>
    );
}

export default Socials;