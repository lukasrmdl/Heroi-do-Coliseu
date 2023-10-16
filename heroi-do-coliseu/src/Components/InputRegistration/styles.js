import styled from 'styled-components'

export const InputCustomizado = styled.input`
  color: #26221B;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid #26221B;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 16px 20px;
  width: 100%;
    &::placeholder {
      color: #3D3828;
      opacity: 0.7;
    }
`