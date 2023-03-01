import {InputContent} from "./styles"

export const Input = ({value, onChange, placeholder}) => {
    return (
        <InputContent value={value} onChange={onChange} placeholder={placeholder}/>
       
    );
}