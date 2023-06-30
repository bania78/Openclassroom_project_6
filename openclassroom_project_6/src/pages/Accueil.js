import Banner from '../components/Banner/Banner';
import CardList from '../components/CardList/CardList';
import img from '../assets/banner.jpg'

function Accueil() {
    let i = 1;
    let f = (resolve => setTimeout(() => {resolve(i);}, 2000))
    console.log(f);
    return (
        <div>
            <Banner img={img} title={"Chez vous, partout et ailleurs"}/>
            <CardList>
            </CardList>
        </div>
    )
}

export default Accueil;
