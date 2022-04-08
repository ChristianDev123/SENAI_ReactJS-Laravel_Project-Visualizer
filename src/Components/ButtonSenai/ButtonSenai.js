import PaletaCores from '../../../Styles/PaletaCores.json';
export default function ButtonSenai(props){
    return(
        <>
        <button onClick={()=>{
            props.roteamento.push('/ListingPage');
        }}>{props.children}</button>
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