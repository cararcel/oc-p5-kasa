import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { loader as homeLoader } from './pages/Home';
import Logement, { loader as logementLoader } from './pages/Logement';
import About from './pages/About';
import Error from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        loader: homeLoader,
        errorElement: <Error />,
    },
    {
        path: '/logement/:id',
        element: <Logement />,
        loader: logementLoader,
        errorElement: <Error />,
    },
    {
        path: '/a-propos',
        element: <About />,
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
