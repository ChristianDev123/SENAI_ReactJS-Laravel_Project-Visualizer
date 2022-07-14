import { Link } from "react-router-dom";
import { SenaiBtn } from "./styleBtn";

export default function ButtonSenai({rota, children, changeState, newValueState}){
    return(
        <Link to={rota!=null?rota:''}>
            <SenaiBtn onClick={()=>{
                if(typeof(changeState) == "function")changeState(newValueState);
            }}>{children}</SenaiBtn>
        </Link>
    );
}