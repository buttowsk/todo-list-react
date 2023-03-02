import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #F8CBA6;
    width: 100%;
    height: 100vh;
`

export const Content = styled.div`
    margin: 30px 0;
    border: 1px solid black;
    flex-basis: 100%;
    height: 70vh;
    padding: 15px 35px;
    border-radius: 10px;
    max-width: 60%;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 8px;
`