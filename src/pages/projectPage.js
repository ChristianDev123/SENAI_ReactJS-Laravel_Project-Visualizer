import CardProject from '../components/CardProjects/CardProject';
import Footer from '../components/Footer/Footer';
import HeaderStatic from '../components/Header/HeaderStatic';
import HeaderFixedTop from '../components/HeaderFixedTop/HeaderFixedTop';
import SenaiLogo from '../assets/img/LogoSenai.png';
import { useState } from 'react';
import { ContainerFluid, Line, TextAbout, TextButton } from '../Styles/StylesProjectPage';
import ButtonSenai from '../components/ButtonSenai/ButtonSenai';
import { Grid } from '@mui/material';

export default function ProjectPage(){
    const [infosPage,setInfosPage] = useState({
        imageMain:SenaiLogo,
        description:'Senai Logo Page'
    });
    return(
        <>
            <header>
                <HeaderFixedTop/>
                <HeaderStatic button={
                    <Grid sx={{width:'70%',height:'100%', margin:'auto'}}>
                        <ButtonSenai rota="/listing-page">
                           <TextButton>
                                Voltar
                            </TextButton>
                        </ButtonSenai>
                    </Grid>
                } />
                <Line/>
            </header>
            <main>
                <ContainerFluid center={true}>
                    <CardProject underlineAll={true} imageCard={infosPage.imageMain} description={infosPage.description} directionId={0}  destination={null}/>
                </ContainerFluid>
                <ContainerFluid>
                    <TextAbout>
                        <p>Text about Machine or Project</p>
                    </TextAbout>
                    <p>Images About Machine or Project</p>
                    <p>video about Machine ot Project</p>
                </ContainerFluid>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}