import { Container, Grid } from "@mui/material";
import ButtonSenai from '../src/Components/ButtonSenai/ButtonSenai';
import CardProject from '../src/Components/CardProjects/CardProject';
import HeaderStatic from "../src/Components/Header/HeaderStatic";
import Footer from "../src/Components/Footer/Footer";
import HeaderFixedTop from '../src/Components/HeaderFixedTop/HeaderFixedTop';
import { useState } from 'react';
import ColorPallet from '../Styles/PaletaCores.json';
import SenaiTeste from '../src/Assets/img/LogoSenai.png';
import DogTeste from '../src/Assets/img/dogaoTeste.jpg';

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
    const stylization = {
        btn:{
            width:'12vw',
            padding:"15px 15px"
        },
        boxCards:{
            marginBottom:"40px",
        }
    }
    return(
        <>
            <header>
                <HeaderFixedTop />
                <HeaderStatic button={
                    <Grid container
                        justifyContent="center"
                    >
                        <Grid 
                            sx={stylization.btn}
                            xs={6}
                            sm={6}
                            md={4}
                            lg={12}
                            xl={12}
                        >
                            <ButtonSenai setState={setTypeProject} newValueState="project">
                                <p className='txtbtn'>Projetos</p>
                            </ButtonSenai>
                        </Grid>
                        <Grid 
                            sx={stylization.btn}
                            xs={6}
                            sm={6}
                            md={4}
                            lg={12}
                            xl={12}
                        >
                            <ButtonSenai setState={setTypeProject} newValueState="machine">
                                <p className='txtbtn'>Maquinas</p>
                            </ButtonSenai>
                        </Grid>
                    </Grid>
                }/>
                <hr/>
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
                        >
                            <CardProject 
                                key={projects.id}
                                directionId={projects.id}
                                imageCard={projects.image}
                                description={
                                    <p>{projects.descriptionProject.trim()}</p>
                                }
                                destination={projects.destination}
                            />
                        </Container>
                        
                    )})
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
                            >
                                <CardProject 
                                    key={projects.id}
                                    directionId={projects.id}
                                    imageCard={projects.image}
                                    description={<p>{projects.descriptionProject.trim()}</p>}
                                    destination={projects.destination}
                                />
                            </Container>
                        )})
                    }
                </Grid>
            </main>
            <footer>
                <Footer />
            </footer>
            <style jsx>{`
                p.txtbtn{
                    font-size:20px;
                    padding:10px 0;
                    color:${ColorPallet.white};
                }
                hr{
                    width:100%;
                    height:1.5px;
                    background:${ColorPallet.primaryLineColor};
                }

            `}</style>
        </>
    );
}