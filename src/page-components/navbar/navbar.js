import './navbar.css';

function MenuButton(props) {
    return (
        <a href={props.path}>
            <p>{props.text}</p>
        </a>
    )
}

function ContactButton(props) {
    return (
        <button>
            <img src={props.image} alt={props.text}/>
        </button>
    )
}


function Navbar() {
    

    return <>
        <div className="navbar-menu">
            <section className="club-icon">
                <a href="/">
                    <img src="" alt="Club Icon"/>
                </a>
            </section>

            <svg>
                <rect/>
            </svg>

            <MenuButton text="About" path="/about"/>
            <MenuButton text="Team" path="/team"/>
            <MenuButton text="Events" path="/events"/>
            <MenuButton text="FAQ" path="/faq"/>
<<<<<<< HEAD

=======
            <a className="navbar-join" href="/join">
                Join Us
            </a>
>>>>>>> df6cbcf787811b0d6c7177e9b3404204f504ea00
        </div>


        <div className="navbar-contact">
            <ContactButton text="Email"/>
            <ContactButton text="Instagram"/>
        </div>

    </>
}

export default Navbar;