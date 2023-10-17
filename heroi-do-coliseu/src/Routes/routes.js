import React from 'react';

import Registration from '../Pages/Registration/index';
import Home from '../Pages/Home/index';
import Wiki from '../Pages/Wiki/index';
import Forum from '../Pages/Forum/index';
import Download from '../Pages/Download/index';
import Login from '../Pages/Login';
import ForumDetail from '../Pages/ForumDetail';
import RecuperarSenha from '../Pages/RecuperarSenha';


import UserScreen from '../Pages/UserScreen';

import ProtectedRoutes from '../Routes/ProtectedRoutes';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Registration/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/forum" element={<Forum/>}/>
                <Route path="/forum/:id" element={<ForumDetail />} />
                <Route path="/wiki" element={<Wiki/>}/>
                <Route path="/download" element={<Download/>}/>
                <Route path="/recuperarSenha" element={<RecuperarSenha/>}/>
                <Route path="/perfil" element={<ProtectedRoutes><UserScreen/></ProtectedRoutes>}/>
            </Routes>
        </Router>
    )
}

export default Routering;