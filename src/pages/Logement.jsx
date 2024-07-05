import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import '../styles/logement.scss';
import Carrusel from '../components/Carrusel';
// import logementsData from '../logements.json';

function Logement() {
    // const logement = logementsData.find((l) => l.id === idFromRoute);

    return (
        <>
            <AppLayout>
                <Carrusel />
                {/* pictures={logement.pictures} */}
            </AppLayout>
        </>
    );
}

export default Logement;
