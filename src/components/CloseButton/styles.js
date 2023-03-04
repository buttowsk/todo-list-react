import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
`
export const ButtonContent = styled.button`
  background-color: #4E31AA;
  color: #F5EAEA;
  width: inherit;
  height: 28px;
  border: none;
  border-radius: 16px;
  text-align: center;
  font-size: 18px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  &:hover {
    background-color: #FF0303;
    color: #F5EAEA;
  }
  
  &:active {
    background-color: #FF0303;
    color: #4E31AA;
  }
  
`