/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import {Container, Form, DivValidate, LinkSenha} from './styles';
import InputLogin from '../../Components/InputLogin';
import BotaoLogin from '../../Components/ButtonLogin';

import { NavLink, useNavigate } from 'react-router-dom'

import {auth} from '../../Firebase';
import {validarEmail, validarSenha} from '../../Utils/validators';
import {signInWithEmailAndPassword, signOut, sendEmailVerification} from 'firebase/auth';

const Login = () => {

    const [loading, setLoading] = useState()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);


    const navigate = useNavigate();

    const user = {
        userEmail: email,
        userPassword: password
    }

    const validadorInput = () => {
        return validarEmail(email) && validarSenha(password)
    }

    const handleButtonClick = () => {
        setButtonClicked(true);
      }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        if(!credentials.user.emailVerified) {
            alert('Erro, Por favor. Verifique o seu email para acessar!');
            return;
        }
        setLoading(false);

         // Signed in
        const user = credentials;
        navigate("/home")
        }catch (error) {
            console.log('Erro ao fazer acesso: ' + error);
            switch (error.code) {
              case 'auth/user-not-found':
                alert('Erro, Usuário não encontrado!');
                setLoading(false);
                break;
              case 'auth/wrong-password':
                alert('Erro, Senha inválida!');
                setLoading(false);
                break;
              case 'auth/invalid-email':
                alert('Erro, Email inválido!');
                setLoading(false);
                break;
              case 'auth/user-disabled':
                alert('Erro, Usuário desabilitado!');
                setLoading(false);
                break;
            case 'auth/missing-password':
                alert('Erro, Informe a sua senha!');
                setLoading(false);
                break;
              default:
                alert('Erro ao fazer Acesso!');
                setLoading(false);
                console.log(error);
                break;
            }
          };
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <Container>
            <Form>
                <div>
                    <h1>Olá!</h1> 
                    <h1>Seja Bem vindo de volta.</h1>
                </div>
                <h2>Faça o seu acesso agora</h2>
                <InputLogin name='emailLogin' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} type='email'/>
                <InputLogin name='passwordLogin' placeholder='Digite a sua senha' onChange={(e) => setPassword(e.target.value)}  type={showPassword ? 'text' : 'password'}/>
                <div className="password-toggle">
                    <button type='button' onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
                <LinkSenha href='/recuperarSenha'>Esqueci minha senha</LinkSenha>
                <BotaoLogin
                    type='submit'
                    text='Entrar!'
                    onClick={handleSubmit}
                    disabled={loading === true || !validadorInput()}
                />
                <div>
                    <p>Não possui conta? <a href='/cadastro'>Cadastre-se aqui.</a></p>
                </div>
                    <DivValidate>
                        <h4>Certifique-se de preencher os  <br /> campos email e senha corretamente  <br />para liberar o acesso.</h4>
                    </DivValidate>
            </Form>
        </Container>
    )
}

export default Login;