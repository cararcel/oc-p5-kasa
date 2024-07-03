import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Card from '../components/Card';
import '../styles/home.scss';

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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </AppLayout>
        </>
    );
}

export default Home;
