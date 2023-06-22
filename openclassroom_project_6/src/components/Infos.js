import React, { useState } from 'react';
import "../styles/Infos.css"

function Infos ({title, contents}) {
    const [index, setIndex] = useState(-1);
    const [bool, setBool] = useState(false);
    const desContent = () => {
        const newIndex = index - 1;
        setBool(!bool)
        setIndex(newIndex < -1 ? 0 : newIndex);
    }
    return (
        <div className="info"  style={{maxHeight : bool ? '500px' : '44px'}}>
            <div className='banner_des'>
                <h3 className="h3_description">{title}</h3>
                <button onClick={desContent}>
                    <i className="icon fa-solid fa-angle-down" style={{transform: `rotate(${(index + 1)* 180}deg)`}}></i>
                </button>
            </div>
            <div className="info_content" style={{transform: `translate(0, ${index * 80}%)`}}>
                { contents.map((content, id) => (
                    <p key={id} className='p_info'>{content}</p>
                ))}
            </div>
        </div>
    )
}

export default Infos