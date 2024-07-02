import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            {/* <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link> */}
            <div>
                <Link to="/">Home</Link>
                <Link to="/logement">Logement</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Nav;
