import { Input, Wrapper } from "./FormButtonInputStyles";

export default function FormButtonInput({label, newValue, setState, active, submit=false, outForm}){
    return(
        <Wrapper outForm={outForm}>
            <Input outForm={outForm} active={active} type={submit?'submit':'button'} value={label} onClick={()=>!submit && setState(newValue)}/>
        </Wrapper>
    );
}