import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width:100vw;
    background: #3D3828;
`


export const Div = styled.div`
    position: relative;
    margin-top: 2em;
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
        color: #EDB561;
        font-size: 16px;
        text-decoration: none;
        font-weight: bold; 
        text-align: center;
    }
    a:hover {
        color: white;
    }
`

export const ForumItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #26221B;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ForumTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ForumDescription = styled.div`
  font-size: 14px;
  max-width: 100%;
  margin-top: .5em;
  margin-left: .8em;
  white-space: nowrap;
  color: #725d39;
`;


export const ForumInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #725d39;
`;

export const ForumDate = styled.div`
  font-size: 12px;
  color: #725d39;
`;

export const ForumAuthor = styled.div`
  margin-top: .5em;
  font-size: 12px;
  font-style: italic;
`;

export const ForumForm = styled.div`
`;
