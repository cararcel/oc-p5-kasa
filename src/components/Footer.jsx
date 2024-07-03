import logo from '../assets/logo-black.png';
import '../styles/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-logo" src={logo} alt="logo-Kasa-white" />
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
