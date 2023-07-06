import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width:100vw;
    background: #383838;
`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: #201d1d;
    border-radius: 30px;
    width 100%;
    max-width: 450px;
    gap: 30px 0px;

    h1 {
        color: white;
        font-size: 24.5px;
        font-weight: bold;
    }
    h2 {
        color: white;
        font-size: 21px;
        font-weight: bold;
        text-align: center;
    }

    p {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    a {
        color: white;
        font-size: 14px;
    }
`