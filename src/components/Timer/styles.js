import styled from "styled-components";

export const Container = styled.div`
  justify-content: flex-start;
  width: 100%;
  border: 1px solid black;
  border-top: 0;
  padding-left: 12px;
  background-color: #FFF1DC;
`

export const RemaningTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-weight: 100;
  padding: 10px;
`

export const TotalRemaningTimeText = styled.p`
  font-size: calc(8px + 2vmin);
  margin: 0 8px;
`

export const TimeText = styled.span`
  font-size: 12px;
`