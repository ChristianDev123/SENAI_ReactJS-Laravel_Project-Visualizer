import { Label, Textarea, Wrapper } from "./FormTextareaStyles";

export default function FormTextarea({message, register, nameInput, id, label, placeholder, setState, state}){
    return(
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Textarea {...register(nameInput,{required:message})} id={id} complete="off" placeholder={placeholder} value={state} onChange={(event)=>setState(event.target.value)}/>
        </Wrapper>
    );
}