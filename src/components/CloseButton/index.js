import {ButtonContent, ButtonContainer} from "./styles"
export const CloseButton = ({onClick, label}) => {
    return (
        <ButtonContainer>
            <ButtonContent onClick={onClick}>
                {label}
            </ButtonContent>
        </ButtonContainer>
    );
}