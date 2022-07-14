import { Input, Label, Wrapper } from "./FormTextInputStyles";

export default function FormTextInput({label, id, state, setState, placeholder, register, nameInput, message}){
    return(
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input type="text" {...register(nameInput,{required:message})}id={id} value={state} onChange={(event)=>setState(event.target.value)} placeholder={placeholder}/>
        </Wrapper>
    );
}