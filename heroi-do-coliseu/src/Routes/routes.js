import React from 'react';

import Login from '../Pages/Login/index';
import Registration from '../Pages/Registration/index';
import Home from '../Pages/Home/index';
import Wiki from '../Pages/Wiki/index';
import Forum from '../Pages/Forum/index';
import Download from '../Pages/Download/index';

import UserScreen from '../Pages/UserScreen';

import ProtectedRoutes from '../Routes/ProtectedRoutes';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login/>}/>
                <Route path="/cadastro" element={<Registration/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/forum" element={<Forum/>}/>
                <Route path="/wiki" element={<Wiki/>}/>
                <Route path="/download" element={<Download/>}/>
                <Route path="/perfil" element={<ProtectedRoutes><UserScreen/></ProtectedRoutes>}/>
            </Routes>
        </Router>
    )
}

export default Routering;