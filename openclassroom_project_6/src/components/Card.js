import logements from '../data/logements.json'
import '../styles/Card.css'

function Card() {
    return (
        logements.map(logement => (
            <li key={logement.id} className="Card">
                <a className='a_card' href={`/logements/${logement.id}`}>
                    <article className='article_card'>
                        <img className="card_img" src={logement.cover} alt={logement.title}/>
                        <h3 className='h3_card'>{logement.title}</h3>
                    </article>
                </a>
            </li>
    )));
}

export default Card