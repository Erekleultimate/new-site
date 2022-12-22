import './Footer.css'
import logo from '../images/logo-white.png'

function FooterLinks(props) {
    return (
        <li><a href={props.link}>{props.name}</a></li>
    )
}

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footerContent">
                    <div className="footerDescription">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi ea, velit odit eligendi incidunt esse cum corrupti blanditiis quaerat quia obcaecati dignissimos soluta culpa doloribus cupiditate! Consectetur, qui nam.</p>
                    </div>
                    <div className="footerLinks">
                        <ul>
                            <h4><a href="/courses">კურსები</a></h4>
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                        </ul>
                        <ul>
                            <h4><a href="/courses">კურსები</a></h4>
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                        </ul>
                        <ul>
                            <h4><a href="/courses">კურსები</a></h4>
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                            <FooterLinks link="/courses" name="კურსები" />
                        </ul>
                    </div>
                </div>
            </div>
            <span>Copyright © 2022 EduCity</span>
        </footer>
    );
}

export default Footer;