import React from 'react';
import Header from './Header';

function Error() {
    return (
        <>
            <Header />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </>
    );
}

export default Error;
