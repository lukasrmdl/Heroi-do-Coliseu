/* eslint-disable react-hooks/exhaustive-deps */
import {FaDungeon} from "react-icons/fa";
import logo from "../../Assets/img/test.png";
import { useEffect, useState } from 'react';
import {auth} from '../../Firebase/index';

function Navbar() {
    const [currentUser, setCurrentUser] = useState(null);
    const currentPath = window.location.pathname; // Obtenha a URL atual


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setCurrentUser(user);
          console.log(currentUser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

const handleSignOut = async () => {
    try {
      await auth.signOut(); // Função para finalizar a sessão do usuário usando o Firebase Auth
      window.location.replace('/home');
    } catch (error) {
      console.log('Erro ao finalizar sessão: ' + error);
    }
  };

    return(
        <header>
            <img id="img_icon" src={logo} alt="Descrição da imagem" />
            <nav>
                <div>
                <a className={`nav-link ${currentPath === '/home' ? 'active' : ''}`} href="/home">
                  Home
                </a>
                <a className={`nav-link ${currentPath === '/wiki' ? 'active' : ''}`} href="/wiki">
                  Wiki
                </a>
                <a className={`nav-link ${currentPath === '/forum' ? 'active' : ''}`} href="/forum">
                  Forum
                </a>
                <a className={`nav-link ${currentPath === '/download' ? 'active' : ''}`} href="/download">
                  Download
                </a>
                </div>
            </nav>
            {currentUser ? (
        <button className="nav-btn" onClick={handleSignOut}>
          Finalizar Sessão <FaDungeon />
        </button>
      ) : (
        <a href="/login">
          <button className="nav-btn">Acessar <FaDungeon /></button>
        </a>
      )}
        </header>
    )
}

export default Navbar;

