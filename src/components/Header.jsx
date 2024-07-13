import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={logo} alt="logo-Kasa" />
                </Link>
            </div>
            <nav className="header-nav">
                <Link className="header-nav_link" to="/">
                    Accueil
                </Link>
                <Link className="header-nav_link" to="/a-propos">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
