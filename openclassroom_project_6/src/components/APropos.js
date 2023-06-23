import img from '../assets/banner_bis.jpg'
import Banner from './Banner';
import Infos from './Infos';
import "../styles/APropos.scss"

function APropos () {
    return (
        <div>
            <Banner img={img} title={""}/>
            <div className='content_a_propos'>
                <Infos title={"Fiabilité"} contents={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]}/>
                <Infos title={"Respect"} contents={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}/>
                <Infos title={"Service"} contents={["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]}/>
                <Infos title={"Sécurité"} contents={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]}/>
            </div>
        </div>
        )
}

export default APropos