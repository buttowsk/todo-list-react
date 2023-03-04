import styled from "styled-components"


export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 270%;
  margin: 12px 0;
  border-bottom: 2px solid #EEEEEE ;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: #EEEEEE;
  border-radius: 4px;
  text-align: center;
`

export const InputText = styled.input`
  background-color: transparent;
  color: #F5EAEA;
  border: none;
  height: 30px;
  width: inherit;
  padding: 0 8px;
  outline: none;


  &::placeholder {
    color: #EEEEEE;
  }

  &::-webkit-calendar-picker-indicator {
    background-color: #E3DFFD;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
  }

  &[type = "datetime-local"]:focus {
    color: #f3f3f3;
  }
`
