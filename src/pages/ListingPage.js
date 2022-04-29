import { Container, Grid } from "@mui/material";
import ButtonSenai from '../components/ButtonSenai/ButtonSenai';
import CardProject from '../components/CardProjects/CardProject';
import HeaderStatic from "../components/Header/HeaderStatic";
import Footer from "../components/Footer/Footer";
import HeaderFixedTop from '../components/HeaderFixedTop/HeaderFixedTop';
import { useState } from 'react';
import SenaiTeste from '../assets/img/LogoSenai.png';
import DogTeste from '../assets/img/dogaoTeste.jpg';
import { Line, TextButton } from "../Styles/StylesListingPage";

const stylization = {
    btn:{
        width:'12vw',
        padding:"15px 15px"
    },
    boxCards:{
        marginBottom:"40px",
    }
}
export default function ListingPage(){
    const [typeProject, setTypeProject] = useState("project")
    const [projectData,setProjectData] = useState([
        {id:0,image:SenaiTeste,descriptionProject:'SenaiLogo Image',destination:"SenaiLogoPage"},
        {id:1,image:SenaiTeste,descriptionProject:'SenaiLogo Image',destination:"SenaiLogoPage"},
        {id:2,image:SenaiTeste,descriptionProject:'SenaiLogo Image',destination:"SenaiLogoPage"},
        {id:3,image:SenaiTeste,descriptionProject:'SenaiLogo Image',destination:"SenaiLogoPage"},
        {id:4,image:SenaiTeste,descriptionProject:'SenaiLogo Image',destination:"SenaiLogoPage"}
    ]);
    const [machineData,setMachineData] = useState([
        {id:0,image:DogTeste,descriptionProject:'Dogao Machine Image',destination:"DogaoPage"},
        {id:1,image:DogTeste,descriptionProject:'Dogao Machine Image',destination:"DogaoPage"},
        {id:2,image:DogTeste,descriptionProject:'Dogao Machine Image',destination:"DogaoPage"},
        {id:3,image:DogTeste,descriptionProject:'Dogao Machine Image',destination:"DogaoPage"},
        {id:4,image:DogTeste,descriptionProject:'Dogao Machine Image',destination:"DogaoPage"}
    ]);
    return(
        <>
            <header>
                <HeaderFixedTop />
                <HeaderStatic button={
                    <Grid container justifyContent="center">
                        <Grid item
                            sx={stylization.btn}
                            xs={6}
                            md={4}
                            lg={12}
                        >
                            <ButtonSenai changeState={setTypeProject} newValueState="project">
                                <TextButton>Projetos</TextButton>
                            </ButtonSenai>
                        </Grid>
                        <Grid item
                            sx={stylization.btn}
                            xs={6}
                            md={4}
                            lg={12}
                        >
                            <ButtonSenai changeState={setTypeProject} newValueState="machine">
                                <TextButton>Maquinas</TextButton>
                            </ButtonSenai>
                        </Grid>
                    </Grid>
                }/>
                <Line/>
            </header>
            <main>
                <Grid 
                    container
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:"center",
                        alignItems:"center",
                        padding:"50px"
                    }}
                >
                    {typeProject === "project"
                    ?
                    projectData.map((projects)=>{
                        return(
                            <Container
                                sx={{
                                    border:`2px solid #ccc`,
                                    borderRadius:"10px",
                                    marginTop:"20px",
                                    padding: "15px",
                                }}
                                key={projects.id}
                            >
                                <CardProject 
                                    directionId={projects.id}
                                    imageCard={projects.image}
                                    description={projects.descriptionProject.trim()}
                                    destination={projects.destination}
                                />
                            </Container>
                        )
                    })
                    :
                    machineData.map((projects)=>{
                        return(
                            <Container
                                sx={{
                                    border:`2px solid #ccc`,
                                    borderRadius:"10px",
                                    marginTop:"20px",
                                    padding: "15px",
                                }}
                                key={projects.id}
                            >
                                <CardProject 
                                    directionId={projects.id}
                                    imageCard={projects.image}
                                    description={projects.descriptionProject.trim()}
                                    destination={projects.destination}
                                />
                            </Container>
                        )
                    })
                    }
                </Grid>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}