import React, { useState } from 'react';
import { Container, Form, DivValidate } from './styles';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase';
import InputLogin from '../../Components/InputLogin';
import BotaoLogin from '../../Components/ButtonLogin';
import { validarEmail } from '../../Utils/validators';
import { useNavigate } from 'react-router-dom'



const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async () => {

    try {
      alert('Um email de recuperação de senha foi enviado para ' + email + '. Verifique sua caixa de entrada!');
      navigate("/home")
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        console.error('Email inválido.');
      } else {
        console.error('Erro desconhecido ao enviar email de recuperação de senha:', error);
      }
    };
  };

  const validadorInput = () => {
    return validarEmail(email) 
  }

  return (
    <Container>
      <Form>
        <div>
          <h1>Redefinir Senha</h1>
          <div>
            <InputLogin name="recuperarsenha" type="email" placeholder='Digite o seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>

            <BotaoLogin
              type='submit'
              text='Entrar!'
              onClick={handlePasswordReset}
              disabled={!validadorInput()}
            >
              Enviar Email de Recuperação de Senha
            </BotaoLogin>
            <DivValidate>
              <h4>Certifique-se de preencher o campo de email corretamente para liberar o envio</h4>
            </DivValidate>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default RecuperarSenha;
