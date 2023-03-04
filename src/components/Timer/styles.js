import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  margin: 12px auto;
  * {
    color: #F5EAEA;
  }
`

export const RemaningTimeBox = styled.div`
  border-radius: 12px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(78, 49, 170);
`

export const TotalRemaningTimeText = styled.p`
  font-size: 2vb;
  margin: 0 auto;
`

export const TimeText = styled.span`
  font-size: 1vb;
  margin: 0 auto;
`