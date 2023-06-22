import Banner from './Banner';
import CardList from './CardList';
import img from '../assets/banner.jpg'

function Accueil() {
    return (
        <div>
            <Banner img={img} title={"Chez vous, partout et ailleurs"}/>
            <CardList>
            </CardList>
        </div>
    )
}

export default Accueil;
