import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  margin: 8px 12px;
  
  * {
    color: #F5EAEA;
  }
`

export const RemaningTimeBox = styled.div`
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(78, 49, 170, 0.3);
  backdrop-filter: blur(10px);
`

export const TotalRemaningTimeText = styled.p`
  font-size: 12px;
  margin: 0 8px;
`

export const TimeText = styled.span`
  font-size: 12px;
  margin: 0 8px;
`