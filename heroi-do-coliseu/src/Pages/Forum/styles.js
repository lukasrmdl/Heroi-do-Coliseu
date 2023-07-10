import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width:100vw;
    background: #26221B;
`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: #EDB561;
    border-radius: 30px;
    width 100%;
    max-width: 600px;
    gap: 30px 0px;

    h1 {
        color: #26221B;
        font-size: 24.5px;
        font-weight: bold;
        text-align: center;
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