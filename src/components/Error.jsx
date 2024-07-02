import React from 'react';
import Nav from '../components/Nav';

function Error() {
    return (
        <div>
            <Nav />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
    );
}

export default Error;
