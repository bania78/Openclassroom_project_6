import React, { useState, useEffect } from 'react';
import '../styles/Carrousel.css';

function Carrousel({ logement }) {
    const [index, setIndex] = useState(0);
    const length = logement.pictures.length;
    const data = logement.pictures

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };
    useEffect(() => {
        const interval = setInterval(() => {handleNext()}, 5000);
        return () => clearInterval(interval);
    });
    return (
        <div className="carousel_div">
            { data.map((picture, id) => {
                return <img className='carrousel_img' style={{transform: `translate(-${index * 100}%)`}} key={id} alt={logement.title} src={picture}></img>
            })
            }
            <button className='previous_button' onClick={handlePrevious}>{"<"}</button>
            <button className='next_button' onClick={handleNext}>{">"}</button>
        </div>
    );
}

export default Carrousel