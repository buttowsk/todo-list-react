import {InputContainer, InputText, IconContainer} from "./styles"

export const Input = ({value, onChange, placeholder, type, onFocus, min, leftIcon}) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null}
            <InputText value={value} onChange={onChange} placeholder={placeholder} type={type} min={min} onFocus={onFocus} />
        </InputContainer>
    );
}