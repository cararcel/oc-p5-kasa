import React from 'react';
import '../styles/logementCard.scss';

function LogementCard({ logement }) {
    return (
        <figure className="logement-card">
            <h2 className="logement-card_title">{logement.title}</h2>
            <img
                className="logement-card_img"
                src={logement.cover}
                alt={logement.title}
            />
        </figure>
    );
}

export default LogementCard;
