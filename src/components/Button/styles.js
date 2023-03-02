import styled from "styled-components";


export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonContent = styled.button`
    background-color: #A84448;
    padding: 0 12px;
    color: #ECF9FF;
    width: 120px;
    height: 28px;
    border: none;
    border-radius: 12px;
    text-align: center;
    font-size: 18px;

    &:hover {
        background-color: #ECF9FF;
    }
`