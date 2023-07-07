import React from 'react';

import Login from '../Pages/Login/index';
import Registration from '../Pages/Registration/index';
import Home from '../Pages/Home/index';
import UserScreen from '../Pages/UserScreen';

import ProtectedRoutes from '../Routes/ProtectedRoutes';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login/>}/>
                <Route path="/registro" element={<Registration/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/perfil" element={<ProtectedRoutes><UserScreen/></ProtectedRoutes>}></Route>
            </Routes>
        </Router>
    )
}

export default Routering;