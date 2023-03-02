import {ButtonContainer, ButtonContent} from "./styles";

export const Button = ({onClick, label}) => {
    return (
        <ButtonContainer>
            <ButtonContent onClick={onClick}>
                {label}
            </ButtonContent>
        </ButtonContainer>

    );
}