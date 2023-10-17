import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 100vw;
  background-color: #3D3828;
`
export const DivValidatePass = styled.div`
    background-color: #ED8561;
    color: #fff;
    border-radius: 10px;
    padding: 8px;
    text-align: center;
    font-weight: bold; 
    width: 100%;
    margin: auto;
    h4 {
      text-align: justify;
      padding: 10px;
    }
`

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EDB561;
  border-radius: 30px;
  width: 100%;
  max-width: 450px;
  gap: 20px 0px;
  margin-top: 1.5em;
  margin-bottom: 1em;

  h1 {
    color: #26221B;
    font-size: 25px;
    font-weight: light;
  }

  h2 {
    color: #3D3828;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: #3D3828;
    font-size: 16px;
    font-weight: bold; 
  }

  a {
    color: #26221B;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold; 
  }
  a:hover {
        color: white;
  }
  #loading {
    color: #3D3828;
    background-color:#26221B;
  }
`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`
