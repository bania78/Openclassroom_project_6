import Logements from '../data/logements.json'
import { useLoaderData } from "react-router-dom";
import Carrousel from './Carrousel';
import Detail from './Detail';
import Description from './Description';

export async function getLogement(id) {
    let Logement = Logements.find(Logement => Logement.id === id);
    return Logement ?? null;
}

export async function loader({ params }) {
    const logement = await getLogement(params.logementId);
    return { logement };
}

function Logement() {
    const { logement } = useLoaderData();
    return (
        <div>
            <Carrousel logement={logement}/>
            <Detail logement={logement}/>
            <Description logement={logement}/>
        </div>
    );
}

export default Logement
