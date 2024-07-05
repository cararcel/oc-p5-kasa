import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import '../styles/logement.scss';
import Carrusel from '../components/Carrusel';
import logementsData from '../logements.json';
import { useParams } from 'react-router-dom';

function Logement() {
    let params = useParams();

    const logement = logementsData.find((l) => l.id === params.id);

    return (
        <>
            <AppLayout>
                <Carrusel pictures={logement.pictures} />
            </AppLayout>
        </>
    );
}

export default Logement;
