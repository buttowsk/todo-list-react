import styled from "styled-components";


export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 23px;
`
export const ButtonContent = styled.button`
  background-color: #4E31AA;
  padding: 0 12px;
  color: #F5EAEA;
  width: 100%;
  height: 28px;
  border: none;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;

  &:hover {
    background-color: #F5EAEA;
    color: #4E31AA;
    cursor: pointer;
  }
  
`