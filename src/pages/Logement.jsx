import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import '../styles/logement.scss';
import Carrusel from '../components/Carrusel';
import logementsData from '../logements.json';
import { useParams } from 'react-router-dom';
import Collapsible from '../components/Collapsible';
import Star from '../components/icons/Star';
import Profile from '../assets/profile.png';

function Logement() {
    let params = useParams();

    const logement = logementsData.find((l) => l.id === params.id);

    let ratings = new Array(5).fill(false).fill(true, 0, logement.rating);

    return (
        <>
            <AppLayout>
                <Carrusel pictures={logement.pictures} />
                <div className="logement">
                    <section className="logement-top">
                        <header className="logement-header">
                            <h1 className="logement-title">{logement.title}</h1>
                            <p className="logement-location">
                                {logement.location}
                            </p>
                            <div className="logement-tags">
                                {logement.tags.map((tag, index) => (
                                    <span className="tag" key={`tag-${index}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </header>
                        <div className="logement-host-rating">
                            <div className="logement-host">
                                <p>{logement.host.name}</p>
                                <img
                                    src={logement.host.picture}
                                    alt={logement.host.name}
                                    className="host-image"
                                />
                            </div>
                            <div className="logement-rating">
                                {ratings.map((rating, index) => (
                                    <Star
                                        key={`rating-${index}`}
                                        className={rating ? 'star-filled' : ''}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="logement-details">
                        <article className="logement-description">
                            <Collapsible title="Description">
                                {logement.description}
                            </Collapsible>
                        </article>
                        <article className="logement-equipments">
                            <Collapsible title="Équipement">
                                <ul>
                                    {logement.equipments.map(
                                        (equipment, index) => (
                                            <li
                                                className="equipment"
                                                key={`equipement-${index}`}
                                            >
                                                {equipment}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </Collapsible>
                        </article>
                    </section>
                </div>
            </AppLayout>
        </>
    );
}

export default Logement;
