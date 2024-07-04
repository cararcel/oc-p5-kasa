import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Collapsible from '../components/Collapsible';
import '../styles/about.scss';

function About() {
    return (
        <>
            <AppLayout>
                <div className="about-banner"></div>
                <div className="about-collapsibles">
                    <Collapsible title="Fiabilité">
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </Collapsible>
                    <Collapsible title="Respect">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </Collapsible>
                    <Collapsible title="Service">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </Collapsible>
                    <Collapsible title="Sécurité">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </Collapsible>
                </div>
            </AppLayout>
        </>
    );
}

export default About;
