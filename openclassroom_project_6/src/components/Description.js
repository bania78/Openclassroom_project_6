import "../styles/Description.css"
import Infos from './Infos';

function Description ({logement}) {
    return (
        <div className="description_div">
            <Infos title={"Description"} contents={[logement.description]}/>
            <Infos title={"Équipements"} contents={logement.equipments}/>
        </div>
    )
}

export default Description