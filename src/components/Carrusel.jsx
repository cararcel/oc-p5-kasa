import React from 'react';
import '../styles/carrusel.scss';
import carrusel1 from '../assets/logement1.png';
import ArrowLeft from '../components/icons/ArrowLeft';
import ArrowRight from '../components/icons/ArrowRight';

function Carrusel() {
    return (
        <figure className="carrusel">
            <img
                className="carrusel-img"
                src={carrusel1}
                alt="living room of a house"
            />
            <div className="carrusel-arrow left">
                <ArrowLeft />
            </div>
            <div className="carrusel-arrow right">
                <ArrowRight />
            </div>
            <p className="carrusel-count">1/4</p>
        </figure>
    );
}

export default Carrusel;
