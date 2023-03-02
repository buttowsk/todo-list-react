import styled from "styled-components"


export const InputContainer = styled.div`
    width: 100%;
    max-width: 275%;
    height: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 12px;
    border: 2px solid #FFE7CC;
   
`

export const InputText = styled.input`
    background-color: transparent;
    color: #ECF9FF;
    border: 0;
    height: 30px;
    width: 100%; 
    padding: 0 8px;
    &:focus {
        outline: none;
    }
`
