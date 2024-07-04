import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import { Link } from 'react-router-dom';
import '../styles/error.scss';

function Error() {
    return (
        <>
            <AppLayout>
                <div className="error">
                    <p className="error_404">404</p>
                    <p className="error-message">
                        Oups!La page que
                        vous&nbsp;demandez&nbsp;n'existe&nbsp;pas.
                    </p>
                    <Link className="error_link" to="/">
                        Retourner sur la page d’accueil
                    </Link>
                </div>
            </AppLayout>
        </>
    );
}

export default Error;
