import Card from './Card';
import '../styles/CardList.css'

function CardList() {
    return (
        <div className="CardList">
            <ul className='ul_cardlist'>
                <Card />
            </ul>
        </div>
    )
}

export default CardList