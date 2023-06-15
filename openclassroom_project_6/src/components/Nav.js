import logo from './../assets/logo_kasa.png';
import '../styles/Nav.css'

function Nav() {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            <ul>
                <li><a>Accueil</a></li>
                <li><a>A Propos</a></li>
            </ul>
        </div>
    )
}

export default Nav
