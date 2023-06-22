import logo from './../assets/logo_kasa.png';
import '../styles/Nav.css'

function Nav() {
    return (
        <div className='header'>
            <img src={logo} alt='logo' />
            <ul className='ul_nav'>
                <li className='li_nav'><a className='a_nav' href={`/`}>Accueil</a></li>
                <li className='li_nav'><a className='a_nav' href={`/a_propos`}>A Propos</a></li>
            </ul>
        </div>
    )
}

export default Nav
