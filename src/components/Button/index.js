import { ButtonContainer } from "./styles";

export const Button = ({onClick, label}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}