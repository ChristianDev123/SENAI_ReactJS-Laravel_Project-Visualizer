import PaletaCores from '../../../Styles/PaletaCores.json';
export default function ButtonSenai({roteamento, children, setState, newValueState}){
    return(
        <>
        <button onClick={()=>{
            if(roteamento != null){
                roteamento.push('/ListingPage');
            }
            const changeState = setState;
            if(typeof(changeState) == "function"){
                changeState(newValueState);
            }
        }}>{children}</button>
        <style jsx>{`
            button{
                width:100%;
                height:100%;
                background:${PaletaCores.primary};
                color:${PaletaCores.white};
                border:none;
                border-radius:15px;
            }
            button:hover{
                background: ${PaletaCores.buttonHoverColor};
                transition:.7s;
            }
        `}</style>
        </>
    );
}