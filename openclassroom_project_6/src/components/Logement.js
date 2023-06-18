import Logements from '../data/logements.json'
import Nav from './Nav';
import { useLoaderData } from "react-router-dom";

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
        </div>
    );
}

export default Logement
