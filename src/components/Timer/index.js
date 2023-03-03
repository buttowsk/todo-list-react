import {Container,TimeText,TotalRemaningTimeText,RemaningTimeBox} from "./styles";
import useTimer from "../../useTimer";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
// eslint-disable-next-line no-unused-vars
const DAY = HOUR * 24;
export const Timer = ({deadline, interval = SECOND}) => {
    const { days, hours, minutes, seconds } = useTimer(deadline, interval);

    return (
        <Container>
            <RemaningTimeBox>
                <TotalRemaningTimeText>{days >= 1 ? days : null}</TotalRemaningTimeText>
                <TimeText>{days >= 1 ? "days" : null}</TimeText>
                <TotalRemaningTimeText>{hours >= 1 ? hours : null}</TotalRemaningTimeText>
                <TimeText>{hours >= 1 ? "hours" : null}</TimeText>
                <TotalRemaningTimeText>{minutes >= 1 ? minutes : null}</TotalRemaningTimeText>
                <TimeText>{minutes >= 1 ? "minutes" : null}</TimeText >
                <TotalRemaningTimeText>{seconds >= 1 ? seconds : null}</TotalRemaningTimeText>
                <TimeText>{seconds >= 0 ? "seconds" : null}</TimeText>
            </RemaningTimeBox>
        </Container>
    )
}

