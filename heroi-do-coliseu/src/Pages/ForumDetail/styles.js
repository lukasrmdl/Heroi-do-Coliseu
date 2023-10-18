import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width:100vw;
    background: #3D3828;
`

export const pTitle = styled.p`
    color: #3D3828;
    margin-top: .3em;
    font-size: 2px;
    font-weight: bold;
    text-align: left;
`
export const TextBox = styled.div`
  background: rgba(38, 34, 27, 0.1);
  border-radius: 10px;
  padding: 1em;
`

export const pTitleData = styled.p`
    color: #3D3828;
    margin-top: .3em;
    font-size: 2px;
    font-weight: bold;
    text-align: right;
`

export const LinkForum = styled.p`
    color: #3D3828;
    margin: .5em;
    margin-bottom: 1.5em;
    padding: 5px;
    font-size: 1em;
    width: 30%;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    border: 1px #3D3828 solid;
    &:hover {
      color: #fff; 
      border-color: #fff;
    }
    &:active {
      color: #3D3828; 
      border-color: #3D3828;
    }
`

export const Div = styled.div`
    position: relative;
    display: flex;
    padding: 4rem;
    margin-top: 2em;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    background-color: #EDB561;
    border-radius: 30px;
    width: 100%;
    max-width: 600px;
    gap: 30px 0px;

    overflow-y: auto; 

    h1 {
        color: #26221B;
        font-size: 2.5em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px;
    }
    h2 {
        color: #3D3828;
        margin-top: .3em;
        margin-bottom: .5em;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
    }
    h3 {
        color: #3D3828;
        margin-top: .3em;
        font-size: 22px;
        font-weight: bold;
        text-align: left;
        margin-bottom: 1em;
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
export const ForumComment = styled.div`
  background-color: #26221B;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: flex-start; 
`;

export const CommentText = styled.p`
  color: #EDB561;
  font-size: 15px;
  max-width: 100%;
  margin-top: .5em;
  margin-left: .4em;
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
  margin-top: 1.5em; 
`;

export const CommentDate = styled.p`
  font-size: 12px;
  color: #725d39;
  margin-left: 5px; 
`;

export const CommentAuthor = styled.p`
  font-size: 12px;
  font-style: italic;
  color: #725d39;
  margin-left: .5em; 
`;
export const TopicDetailsAuthor = styled.p`
  font-size: 15px;
  font-style: bold;
  color: #26221B;
  margin-right: 5px; 
  margin-top: 1.5em;
  `
export const TopicDetailsCreated = styled.p`
  font-size: 15px;
  font-style: bold;
  color: #26221B;
  margin-right: 5px; 
  margin-top: .3em;
`;

