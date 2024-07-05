import React, { useState } from 'react';
import '../styles/carrusel.scss';
import ArrowLeft from '../components/icons/ArrowLeft';
import ArrowRight from '../components/icons/ArrowRight';

function Carrusel({ pictures }) {
    let [pictureIndex, setPictureIndex] = useState(0);
    const pictureCount = pictures.length;

    function next() {
        let newIndex = pictureIndex + 1;

        if (newIndex === pictureCount) {
            newIndex = 0;
        }

        setPictureIndex(newIndex);
    }

    function previous() {
        let newIndex = pictureIndex - 1;

        if (newIndex < 0) {
            newIndex = pictureCount - 1;
        }

        setPictureIndex(newIndex);
    }

    return (
        <figure className="carrusel">
            <img
                key={pictureIndex}
                className="carrusel-img"
                src={pictures[pictureIndex]}
                alt=""
            />
            <div className="carrusel-arrow left" onClick={previous}>
                <ArrowLeft />
            </div>
            <div className="carrusel-arrow right" onClick={next}>
                <ArrowRight />
            </div>
            <p className="carrusel-count">
                {pictureIndex + 1}/{pictureCount}
            </p>
        </figure>
    );
}

export default Carrusel;
