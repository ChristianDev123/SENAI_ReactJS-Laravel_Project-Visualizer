export default function ContainerFluid({children,center}){
    return(
        <>
            <section>{children}</section>
            <style jsx>{`
                section{
                    width:100vw;
                    height:100%;
                    padding:20px;
                    margin:auto;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:${center?'center':''};                 }
            `}</style>
        </>
    );
}