import React from 'react';
import {Container, Form} from './styles';
import game from '../../Assets/game/HDC.zip'

const Download = () => {
    return (
        <Container>
            <Form>
                <h1>Bem-vindo a <span>Área de Downloads</span></h1>
                <p>Baixe a ultima versão e Comece a diversão agora mesmo!</p>
                <a href={game} download>Clique aqui para baixar a ultima versão!</a>
            </Form>
        </Container>
    )
}
  

export default Download;
