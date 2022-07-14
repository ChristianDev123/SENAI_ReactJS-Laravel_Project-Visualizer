import { Input, Wrapper, Label } from "./FormFileInputStyles";

export default function FormFileInput({message, register, nameInput, label, id, setState, state, acceptTypes}){
    return(
        <Wrapper>
            <Label active={state != ''? true: false} htmlFor={id}>{label}</Label>
            <Input {...register(nameInput,{required:message})} id={id} type="file" onChange={(event)=>setState(event.target.files[0])} accept={acceptTypes}/>
        </Wrapper>
    );
}