/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import {Container, Form} from './styles';
import InputLogin from '../../Components/InputLogin';
import BotaoLogin from '../../Components/ButtonLogin';

import {validarEmail, validarSenha} from '../../Utils/validators';
import database from '../../Firebase/index';
import {getAuth, signInWithEmailAndPassword, signOut, sendEmailVerification} from 'firebase/auth';

const auth = getAuth();

const Login = () => {

    const [loading, setLoading] = useState()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = {
        email: email,
        password: password
    }

    const validadorInput = () => {
        return validarEmail(email) && validarSenha(password)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await signInWithEmailAndPassword(auth, user.email, user.password);
            localStorage.setItem("email", response.user.email)
            
            if (response.user) {
                alert('Usuário logado com sucesso!');
                //navegar para a home
            }
            
            setLoading(false);
        }
        catch (error) {
            console.log('Erro ao fazer login: ' + error);
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
              default:
                alert('Erro, Erro ao fazer login!');
                setLoading(false);
                break;
            }
          }
    }

    return(
        <Container>
            <Form>
                <div>
                    <h1>Olá!</h1> 
                    <h1>Seja Bem vindo de volta.</h1>
                </div>
                <h2>faça o seu login agora</h2>
                <InputLogin name='emailLogin' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} type='email'/>
                <InputLogin name='passwordLogin' placeholder='Digite a sua senha' onChange={(e) => setPassword(e.target.value)} type='password'/>
                <BotaoLogin
                    type='submit'
                    text='Entrar!'
                    onClick={handleSubmit}
                    disabled={loading === true || !validadorInput()}
                />
                <div>
                    <p>Não possui conta?</p>
                    <a>Cadastrar</a>
                </div>
            </Form>
        </Container>
    )
}

export default Login;