import './footer.css';

import TeaPartyIcon from './images/UofTeaGray.png';

function Footer() {
    return <>
        <div className="footer-section">
            <div>
                <svg viewBox="0 0 1000 100">
                    <path d="M0,165 L0,2
                        C0,2 100,0 200,52 
                        C200,52 260,86 350,88
                        C350,88 450,93 500,77 
                        C500,77 600,40 650,45
                        C650,45 750,45 800,70
                        C800,70 850,100g 900,90
                        L1000,100 0,100 Z"/>
                </svg>
            </div>
            
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