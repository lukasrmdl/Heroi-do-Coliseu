import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width:100vw;
    background: #3D3828;
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
    max-width: 600px;
    gap: 30px 0px;
    margin-top: 2em;
    margin-bottom: 2em;

    input {
        margin-bottom: 2em;
    }
    h1 {
        color: #26221B;
        font-size: 24.5px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1em;
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
        text-align: center;
    }
    a:hover {
        color: white;
    }
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
    margin-top: 1em;
    h4 {
      text-align: center;
      padding: 5px;
    }
`