import "./Description.scss"
import Infos from '../Infos/Infos';

function Description ({logement}) {
    return (
        <div className="description_div">
            <Infos title={"Description"} contents={[logement.description]}/>
            <Infos title={"Équipements"} contents={logement.equipments}/>
        </div>
    )
}

export default Description