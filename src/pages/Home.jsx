import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import logements from '../logements.json';
import LogementCard from '../components/LogementCard';

function Home() {
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
                            >
                                <LogementCard
                                    key={logement.id}
                                    logement={logement}
                                />
                            </Link>
                        );
                    })}
                </div>
            </AppLayout>
        </>
    );
}

export default Home;
