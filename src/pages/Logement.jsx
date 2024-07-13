import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import '../styles/logement.scss';
import { redirect, useLoaderData } from 'react-router-dom';
import Collapsible from '../components/Collapsible';
import Star from '../components/icons/Star';
import Carousel from '../components/Carousel';

export async function loader({ params }) {
    try {
        const response = await fetch('/logements.json');

        if (!response.ok) {
            throw new Response('Not found', { status: 404 });
        }

        const logements = await response.json();
        const logement = logements.find((l) => l.id === params.id);

        if (!logement) {
            return redirect('/not-found');
        }

        return logement;
    } catch (reason) {
        console.error(`Une erreur est survenue: ${reason}`);
        throw new Response('Not found', { status: 404 });
    }
}

function Logement() {
    const logement = useLoaderData();

    //use effect or compute
    const ratings = new Array(5).fill(false).fill(true, 0, logement.rating);

    return (
        <>
            <AppLayout>
                <Carousel>
                    {logement.pictures.map((picture, index) => {
                        return (
                            <img
                                className="logement-img"
                                key={`logement-picture-${index}`}
                                src={picture}
                                alt=""
                            />
                        );
                    })}
                </Carousel>

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
