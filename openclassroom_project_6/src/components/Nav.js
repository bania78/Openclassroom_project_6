import logo from './../assets/logo_kasa.png';
import '../styles/Nav.css'

function Nav() {
    return (
        <header>
            <img src={logo} alt='logo' />
            <ul>
                <li><a>Acueil</a></li>
                <li><a>A Propos</a></li>
            </ul>
        </header>
    )
}

export default Nav
