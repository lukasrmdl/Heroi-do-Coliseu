import React, {useState} from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import {Container, Form, SubContainerSign, DivValidatePass} from './styles';
import InputRegistration from '../../Components/InputRegistration';
import ButtonRegistration from '../../Components/ButtonRegistration';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {validarEmail, validarNome, validarSenha} from '../../Utils/validators';
import {auth} from '../../Firebase/index';
import db from "../../Firebase/firestore";
import {
  collection,
  addDoc,
} from "firebase/firestore";
 
const Registration = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
   };

    const onSubmit = async (event) => {
      setLoading(true);
      event.preventDefault()


      try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(credentials.user)
        const userDocRef = collection(db, 'users');
    

        await addDoc(userDocRef, {
          name,
          email,
        });
        setLoading(false);

        navigate('/*');
        alert("Usuario criado verifique seu email!!!")
    } catch (error) {
      console.log('Erro ao fazer acesso: ' + error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Este email já está cadastrado. Por favor, escolha outro!');
          setEmail('');
          setLoading(false);
          window.location.reload();
          break;

        default:
          alert('Erro ao fazer Acesso!');
          setLoading(false);
          window.location.reload();
          break;
      }
    };

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
                type={showPassword ? 'text' : 'password'}
              />
              <InputRegistration
                name='password'
                placeholder='Confirme a sua senha'
                onChange={(e) => setPasswordConfirm(e.target.value)} 
                required
                type='password'
              />
                <DivValidatePass>
                  <h4>Sua senha deve conter pelo menos 8 caracteres e incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial, como @, $, !, %, *, ?, ou &.</h4>
                </DivValidatePass>

            <ButtonRegistration
              type='submit'
              text='Efetuar Cadastro!'
              onClick={onSubmit}
              disabled={loading === true || !validadorInput()}
            />
            <SubContainerSign>
              <p>Já possui conta?</p>
              <NavLink to="/login">Acesse aqui.</NavLink>
            </SubContainerSign>
            <div className="password-toggle-r">
                    <button type='button' onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
            </div>
          </Form>
        </Container>
        
      )
}
 
export default Registration;