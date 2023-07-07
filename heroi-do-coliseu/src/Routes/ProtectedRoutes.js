import React from 'react';
//import {getAuth} from 'firebase/auth';
import Routering from './routes';

//const auth = getAuth();

const ProtectedRoutes = ({children}) => {
  const session = localStorage.getItem('user_session');
  //const usuarioAuth = auth().currentUser;
  return session ? children : <Routering />;
};

export default ProtectedRoutes;