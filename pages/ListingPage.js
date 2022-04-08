import ButtonSenai from '../src/Components/ButtonSenai/ButtonSenai';
import { Box, Container, Grid } from "@mui/material";
import Footer from "../src/Components/Footer/Footer";
import HeaderStatic from "../src/Components/Header/HeaderStatic";
import ColorPallet from '../Styles/PaletaCores.json'
import HeaderFixedTop from '../src/Components/HeaderFixedTop/HeaderFixedTop';
import CardProject from '../src/Components/CardProjects/CardProject';
import Facebook from '../src/Assets/img/Facebook.png'
import { useState } from 'react';

export default function ListingPage(){
    const [projectData,setProjectData] = useState([
        {id:0,image:Facebook,descriptionProject:'Facebook Image'},
        {id:1,image:Facebook,descriptionProject:'Facebook Image'},
        {id:2,image:Facebook,descriptionProject:'Facebook Image'},
        {id:3,image:Facebook,descriptionProject:'Facebook Image'},
        {id:4,image:Facebook,descriptionProject:'Facebook Image'}
    ])
    const stylization = {
        btn:{
            width:'12vw',
            marginBottom: '15px'
        }
    }
    return(
        <>
            <header>
                <HeaderFixedTop />
                <HeaderStatic button={
                    <>
                        <Box style={stylization.btn}>
                            <ButtonSenai>
                                <p className='txtbtn'>Projetos</p>
                            </ButtonSenai>
                        </Box>
                        <Box style={stylization.btn}>
                            <ButtonSenai>
                                <p className='txtbtn'>Maquinas</p>
                            </ButtonSenai>
                        </Box>
                    </>
                }/>
            </header>
            <main>
                <Grid 
                    container
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:"center",
                        padding:"50px"
                    }}
                >
                    {projectData.map((projects)=>{
                    return(
                        <CardProject key={projects.id} directionId={projects.id} imageCard={projects.image} description={<p>{projects.descriptionProject.trim()}</p>}/>
                    )  
                    })}
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
            `}</style>
        </>
    );
}