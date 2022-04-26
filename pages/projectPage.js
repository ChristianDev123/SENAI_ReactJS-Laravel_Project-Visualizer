import {useRouter} from 'next/router';
import CardProject from '../src/Components/CardProjects/CardProject';
import Footer from '../src/Components/Footer/Footer';
import HeaderStatic from '../src/Components/Header/HeaderStatic';
import HeaderFixedTop from '../src/Components/HeaderFixedTop/HeaderFixedTop';
import SenaiLogo from '../src/assets/img/LogoSenai.png';
import { useState } from 'react';
import ContainerFluid from '../src/Components/ContainerFluid/ContainerFluid';
import ColorPallet from '../Styles/PaletaCores.json';

export default function ProjectPage(){
    const router = useRouter();
    const [infosPage,setInfosPage] = useState({
        imageMain:SenaiLogo,
        description:'Senai Logo Page'
    });
    return(
        <>
            <header>
                <HeaderFixedTop/>
                <HeaderStatic/>
                <hr/>
            </header>
            <main>
                <ContainerFluid center={true}>
                    <CardProject underlineAll={true} imageCard={infosPage.imageMain} description={infosPage.description} directionId={0} />
                </ContainerFluid>
                <ContainerFluid>
                    <TextAbout>
                        <p>Text about Machine or Project</p>
                    </TextAbout>
                    <p>Images About Machine or Project</p>
                    <img src="#" alt="" />
                    <img src="#" alt="" />
                    <img src="#" alt="" />
                    <img src="#" alt="" />
                    <p>video about Machine ot Project</p>
                    <video src="#"></video>
                </ContainerFluid>
            </main>
            <footer>
                <Footer/>
            </footer>
            <style jsx>{`
                hr{
                    width:100%;
                    height:1.5px;
                    background:${ColorPallet.primaryLineColor};
                }
                main{
                    padding: 20px 0;
                }
            `}</style>
        </>
    );
}

function TextAbout({children}){
    return(
        <>
            <div>{children}</div>
            <style jsx>{`
                div{
                    width:100%;
                    height:100%;
                    text-align: justify;
                }
            `}</style>
        </>
    )
}