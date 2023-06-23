import '../styles/Banner.scss'

function Banner({img, title}) {
    return (
        <div className='div_banner'>
            <img src={img} className='banner_img' alt='côte' />
            <h1 className='h1_banner'>{title}</h1>
        </div>
    );
}

export default Banner
