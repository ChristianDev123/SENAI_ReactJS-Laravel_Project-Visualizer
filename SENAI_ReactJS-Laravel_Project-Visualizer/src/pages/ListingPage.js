import { Grid } from "@mui/material";
import ButtonSenai from '../Components/ButtonSenai/ButtonSenai';
import CardProject from '../Components/CardProjects/CardProject';
import HeaderStatic from "../Components/Header/HeaderStatic";
import Footer from "../Components/Footer/Footer";
import HeaderFixedTop from '../Components/HeaderFixedTop/HeaderFixedTop';
import { useEffect, useState } from 'react';
import { Line, TextButton ,Container} from "../Styles/StylesListingPage";
import axios from 'axios';
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
    const [typeProject, setTypeProject] = useState("")
    const [projectData,setProjectData] = useState([]);
    const [machineData,setMachineData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/')
        .then(({data})=>{
            let arrMachine = machineData;
            let arrProject = projectData;
            data.map((project)=>{
                let dataParser = {id:'',image:'',descriptionProject:'',destination:''};
                dataParser.id = project.id;
                dataParser.image = project.MainImageName;
                dataParser.descriptionProject = project.TextAbout;
                dataParser.destination = project.id;
                if(project.Type == "machine") arrMachine.push(dataParser); 
                else arrProject.push(dataParser);
            });
            setMachineData(arrMachine);
            setProjectData(arrProject);
            setTypeProject('project');
        });    
    },[])

    return(
        <Container>
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
                    projectData.map((projects,index)=>{
                        return(
                            <CardProject 
                                directionId={projects.id}
                                imageCard={projects.image}
                                description={projects.descriptionProject.trim()}
                                destination={projects.destination}
                                key={index}
                            />
                        )
                    })
                    :
                    machineData.map((projects)=>{
                        return(
                            <CardProject 
                                directionId={projects.id}
                                imageCard={projects.image}
                                description={projects.descriptionProject.trim()}
                                destination={projects.destination}
                            />
                        )
                    })
                    }
                </Grid>
            </main>
            <Footer />
        </Container>
    );
}