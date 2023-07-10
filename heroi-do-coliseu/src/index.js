import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './Pages/styles/global';
import Routering from './Routes/routes';
import Navbar from "./Components/Navbar/index";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <React.StrictMode>
        <Navbar />
        <Routering/>
        <GlobalStyle/>
    </React.StrictMode>
);