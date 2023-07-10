import React, {useState} from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import {Container, Form, SubContainerSign} from './styles';
import InputRegistration from '../../Components/InputRegistration';
import ButtonRegistration from '../../Components/ButtonRegistration';

import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {validarEmail, validarNome, validarSenha} from '../../Utils/validators';
import {auth} from '../../Firebase/index';
 
const Registration = () => {
    const navigate = useNavigate();
 
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const validarConfirmarSenha = (confirmarSenha) => {
        return validarSenha(password) && password === confirmarSenha
    }
    const validadorInput = () => {
        return validarEmail(email) && validarSenha(password) && validarNome(name) && validarConfirmarSenha(passwordConfirm)
    }
    
    const onSubmit = async (e) => {
      setLoading(true);
      e.preventDefault()

    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(credentials.user)
        navigate('/*');
        alert("Usuario criado verifique seu email!!!")
    } catch (e) {
        console.error("Erro ao criar usuario: "+e.message)
    }

    }
    if (loading) {
        <Container>
            <h1>Carregando...</h1>
        </Container>
      }
 
    return (
        <Container>
          <Form>
            <h1>Bem vindo! 👋</h1>
            <h2>Faça o seu cadastro para começar a se divertir!</h2>
            <InputRegistration
              name='nome'
              placeholder='Digite o seu nome'
               onChange={(e) => setName(e.target.value)}  
              type='text'
            />
            <InputRegistration
              name='email'
              placeholder='Digite o seu e-mail'
              onChange={(e) => setEmail(e.target.value)} 
              required  
              type='email'
            />
            <InputRegistration
              name='password'
              placeholder='Digite a sua senha'
              onChange={(e) => setPassword(e.target.value)} 
              required
              type='password'
            />
            <InputRegistration
              name='password'
              placeholder='Confirme a sua senha'
              onChange={(e) => setPasswordConfirm(e.target.value)} 
              required
              type='password'
            />
            <ButtonRegistration
              type='submit'
              text='Efetuar Cadastro!'
              onClick={onSubmit}
              disabled={loading === true || !validadorInput()}
            />
            <SubContainerSign>
              <p>Já possui conta?</p>
              <NavLink to="*">Acesse aqui.</NavLink>
            </SubContainerSign>
          </Form>
        </Container>
        
      )
}
 
export default Registration;