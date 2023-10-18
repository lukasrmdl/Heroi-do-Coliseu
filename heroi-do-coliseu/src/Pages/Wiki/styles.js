import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;
    padding: 2rem;
    height: 100%;
    min-width:100vw;
    background: #3D3828;
    margin-top:2rem;
`
export const ArenaImage = styled.img`
  width: 40%; /* Ajuste o tamanho desejado */
  height: 40%; /* Ajuste o tamanho desejado */
  border-radius: 20%; /* Isso arredondará as bordas da imagem */
  margin-bottom: 1em;
`;
export const EquipImage = styled.img`
  width: 30%; 
  height: 30%;
  border-radius: 10%; /* Isso arredondará as bordas da imagem */
  margin-bottom: 1em;
`;


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