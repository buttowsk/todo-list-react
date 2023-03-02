import {InputContainer, InputText} from "./styles"

export const Input = ({value, onChange, placeholder, type, onFocus}) => {
    return (
        <InputContainer>
            <InputText value={value} onChange={onChange} placeholder={placeholder} type={type} onFocus={onFocus}/>
        </InputContainer>
    );
}