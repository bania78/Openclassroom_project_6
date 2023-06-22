import '../styles/Detail.css'

function Detail({logement}) {
    let rate = [];

    for (let i = (Number(logement.rating)); i > 0; i--)
        rate.push(<li key={logement.id+i}><i className='fa-solid fa-star'></i></li>)
    for (let i = ((Number(logement.rating)) - 5); i < 0; i++)
        rate.push(<li key={logement.id+i}><i className='fa-solid fa-star grey'></i></li>)
    return (        
        <div className='detail_div'>
            <div className="title_div">
                <div className='detail_title'>
                    <h2 className='h2_detail'>{logement.title}</h2>
                    <h3 className='h3_detail'>{logement.location}</h3>
                </div>
                <div className='div_host'>
                    <h3 className='h3_detail h3_host'>{logement.host.name}</h3>
                    <img className='img_host' src={logement.host.picture} alt={logement.host.name}></img>
                </div>
            </div>
            <div className='tag_star'>
                <ul className='tag'>
                    { logement.tags.map((tag, id) => (
                        <li key={id} className='li_tag'>{tag}</li>
                    ))}
                </ul>
                <ul className='star'>
                    { rate }
                </ul>
            </div>
        </div>
    )
}

export default Detail
