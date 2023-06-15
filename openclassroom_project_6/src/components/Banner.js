import back from '../assets/banner.jpg'
import '../styles/Banner.css'

function Banner() {
    return (
        <div className='div_banner'>
            <img src={back} className='banner_img' alt='côte' />
            <h1 className='h1_banner'>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner
