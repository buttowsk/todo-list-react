import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`

export const TopBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15px);
    height: 30vh;
    padding: 15px 35px;
    border-radius: 10px;
    max-width: 60%;
`

export const InputWrapper = styled.div`
    width: 50%;
    max-width: 800px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`

export const TaskBox = styled.div`
  max-width: 30%;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  backdrop-filter: blur(15px);
  height: 30vh;
  padding: 2px 20px;
  border-radius: 10px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`

export const TaskContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 14px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
  margin-top: 0;
`