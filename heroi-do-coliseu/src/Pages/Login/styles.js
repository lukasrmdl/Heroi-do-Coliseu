import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width:100vw;
    background: #3D3828;
`

export const LinkSenha = styled.a`
    text-decoration: underline;
    margin-top: -2.5em;
    text-align: right;
`

export const BotaoSenha = styled.button`
    color: #FFF;
    font-size: 20px;
    border: 30px;
    background-color: #3D3828;
    border-radius: 8px;
    width: 100%;
    height: 1em;
    padding: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
`

export const DivValidate = styled.div`
    background-color: #ED8561;
    color: #fff;
    border-radius: 10px;
    padding: 8px;
    text-align: center;
    font-weight: bold; 
    width: 100%;
    margin: auto;
    h4 {
      text-align: center;
      padding: 5px;
    }
`
export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: #EDB561;
    border-radius: 30px;
    width: 100%;
    max-width: 450px;
    margin-top: 1.5em;
    gap: 30px 0px;
    margin-bottom: 1em;

    h1 {
        color: #26221B;
        font-size: 24.5px;
        font-weight: bold;
    }
    h2 {
        color: #3D3828;
        font-size: 21px;
        font-weight: bold;
        text-align: center;
    }

    p {
        color: #3D3828;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }

    a {
        color: #26221B;
        font-size: 16px;
        text-decoration: none;
        font-weight: bold; 
        text-decoration: underline;
    }
    a:hover {
        color: white;
    }
`