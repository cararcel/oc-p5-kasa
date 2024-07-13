import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { Link, useLoaderData } from 'react-router-dom';
import '../styles/home.scss';
import LogementCard from '../components/LogementCard';

export async function loader() {
    try {
        const response = await fetch('/logements.json');

        if (!response.ok) {
            throw new Response('Not found', { status: 404 });
        }

        return response.json();
    } catch (reason) {
        console.error(`Une erreur est survenue: ${reason}`);
        throw new Response('Not found', { status: 404 });
    }
}

function Home() {
    const logements = useLoaderData();

    return (
        <>
            <AppLayout>
                <div className="home-banner">
                    <p className="home-banner_text">
                        Chez vous, partout&nbsp;et&nbsp;ailleurs
                    </p>
                </div>

                <div className="gallery">
                    {logements.map((logement) => {
                        return (
                            <Link
                                className="header-nav_link"
                                to={`/logement/${logement.id}`}
                                key={`logement-link-${logement.id}`}
                            >
                                <LogementCard logement={logement} />
                            </Link>
                        );
                    })}
                </div>
            </AppLayout>
        </>
    );
}

export default Home;
