import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Card from '../components/Card';

function Home() {
    return (
        <>
            <AppLayout>
                <h1>Home</h1>
                <div className="gallery">
                    <Card />
                </div>
            </AppLayout>
        </>
    );
}

export default Home;
