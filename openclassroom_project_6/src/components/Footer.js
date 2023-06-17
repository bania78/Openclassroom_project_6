import '../styles/Footer.css'
import logo from './../assets/logo_kasa_blanc.png';

function Footer() {
    return  (
        <div className='div_footer'>
            <img src={logo} className='footer_img' alt="logo white"/>
            <h3 className='footer_txt'>© 2020 Kasa. All rights reserved</h3>
        </div>
        )
}

export default Footer