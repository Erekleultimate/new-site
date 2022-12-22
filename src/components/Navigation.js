import { useState } from 'react';
import './Navigation.css'
import logo from '../images/logo.png'


function NavLinks(props) {
    return (
        <li><a href={props.link}>{props.name}</a></li>
    )
}

function Navigation() {
    let [opacityBar, setNav] = useState(function () {
        if (window.innerWidth > 870) {
            return { position: 'none', right: '0', top: '0', opacity: "1", zIndex: '10', display: 'flex', transition: 'all 0.4s ease-in' }
        } else {
            return { position: 'absolute', right: '-100%', top: '0', opacity: '0', zIndex: '10', display: 'none', transition: 'all 0.4s ease-in' }
        }
    })

    function showBar() {
        setNav(opacityBar = { opacity: '0', zIndex: '10', transition: 'all 0.4s ease-in' })
        setTimeout(() => {
            setNav(opacityBar = { position: 'absolute', top: '0', right: '0', opacity: "1", zIndex: '10', display: 'flex', transition: 'all 0.4s ease-in' })
        }, 400);
    }

    function hideBar() {
        setNav(opacityBar = { opacity: "0", zIndex: '10', transition: 'all 0.4s ease-in' })
        setTimeout(() => {
            setNav(opacityBar = { position: 'absolute', top: '0', right: '-100%', opacity: "0", zIndex: '10', display: 'none', transition: 'all 0.4s ease-in' })
        }, 400);
    }

    return (
        <header>
            <div className="container">
                <nav>
                <img src={logo} alt="logo" />
                    <div className='navLinks' style={opacityBar}>
                        <svg className='mobile' onClick={hideBar} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.707 18.282C19.8947 18.4721 20 18.7289 20 18.9965C20 19.2641 19.8947 19.5209 19.707 19.711C19.516 19.8964 19.2607 20 18.9949 20C18.7292 20 18.4739 19.8964 18.2828 19.711L10 11.3873L1.71716 19.711C1.52613 19.8964 1.27079 20 1.00506 20C0.739328 20 0.483993 19.8964 0.29296 19.711C0.105284 19.5209 0 19.2641 0 18.9965C0 18.7289 0.105284 18.4721 0.29296 18.282L8.58829 9.97077L0.29296 1.65958C0.133587 1.46473 0.0521409 1.21736 0.0644641 0.965586C0.0767872 0.713816 0.181998 0.475646 0.359633 0.297403C0.537268 0.11916 0.774626 0.0135887 1.02554 0.00122334C1.27645 -0.011142 1.52297 0.0705829 1.71716 0.230502L10 8.55423L18.2828 0.230502C18.477 0.0705829 18.7236 -0.011142 18.9745 0.00122334C19.2254 0.0135887 19.4627 0.11916 19.6404 0.297403C19.818 0.475646 19.9232 0.713816 19.9355 0.965586C19.9479 1.21736 19.8664 1.46473 19.707 1.65958L11.4117 9.97077L19.707 18.282Z" fill="#F5F5F5" />
                        </svg>
                        <ul>
                            <NavLinks link="/" name="მთავარი" />
                            <NavLinks link="/libary" name="ბიბლიოთეკა" />
                            <NavLinks link="/courses" name="კურსები" />
                            <NavLinks link="/projects" name="პროექტები" />
                            <NavLinks link="/social" name="სოც.ქსელი" />
                            <li><a href="/signUp"><button>Sign In / Up</button></a></li>
                        </ul>
                    </div>
                    <svg className='mobile' onClick={showBar} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 24.5H26.5M5.5 16.5H26.5M5.5 8.5H26.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;