import styled from "styled-components"


export const InputContainer = styled.div`
    
    width: 100%;
    max-width: 140%;
    margin: 12px 0;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #F5EAEA;
    border: none;
    height: 30px;
    width: inherit; 
    padding: 0 8px;
    outline: none;
    border-bottom: 2px solid #EEEEEE;
    
  
  
    &::placeholder{
      color: #3A1078;
    }
  
    &::-webkit-calendar-picker-indicator {
      background-color: #E3DFFD;
      border-radius: 4px;
      padding: 4px;
      cursor: pointer;
    }
`
