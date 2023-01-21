import './footer.css';

import TeaPartyIcon from './images/UofTeaGray.png';

function Footer() {
    return <>
        <div className="footer-section">
            <div className="footer-section-info">
                <img src={TeaPartyIcon}/>
                <section>
                    <p>©2023 University of Toronto (UofT) Tea Party</p>
                    <p>Website designed by University of Toronto Freelancer's Organization</p>
                    <p>Icon designed by UofT Tea Party</p>
                </section>
            </div>
        </div>
    </>
}

export default Footer;