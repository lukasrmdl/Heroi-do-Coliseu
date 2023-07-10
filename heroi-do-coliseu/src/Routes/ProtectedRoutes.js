import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/index';
import Home from '../Pages/Home';

const ProtectedRoutes = ({children}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Limpa o efeito anterior

  }, []);

  if (loading) {
    return <div>Loading...</div>; // Renderiza um indicador de carregamento enquanto verifica o estado de autenticação
  }

  return (
    <>
      {authenticated ? (
        children // Renderiza os componentes protegidos se o usuário estiver autenticado
      ) : (
        <Home /> // Renderiza as rotas públicas se o usuário não estiver autenticado
      )}
    </>
  );
};

export default ProtectedRoutes;