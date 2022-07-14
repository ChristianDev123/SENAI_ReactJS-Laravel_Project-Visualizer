import CardProject from '../Components/CardProjects/CardProject';
import Footer from '../Components/Footer/Footer';
import HeaderStatic from '../Components/Header/HeaderStatic';
import HeaderFixedTop from '../Components/HeaderFixedTop/HeaderFixedTop';
import { useEffect, useState } from 'react';
import { Container, ContainerFluid, Image, ImageArea, Line, MediaDescription, MediaWrapper, SectionTitle, TextAbout, TextButton, Video, VideoArea} from '../Styles/StylesProjectPage';
import ButtonSenai from '../Components/ButtonSenai/ButtonSenai';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProjectPage(){
    const [infosPage,setInfosPage] = useState('');
    const [images,setImages] = useState([]);
    const [videos,setVideos] = useState([]);
    const [pathImage,setPathImage] = useState('');
    const [pathVideo,setPathVideo] = useState('');
    const {destination} = useParams();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/${destination}`)
        .then(({data})=>{
            const objDataPage = {idProject:'', imageMain:'', description:'', textAbout:'' };
            objDataPage.idProject = data[0].id;
            objDataPage.imageMain = data[0].MainImageName;
            objDataPage.description = data[0].NameProject;
            objDataPage.textAbout = data[0].TextAbout;
            setInfosPage(objDataPage);
        });
    },[]);

    useEffect(()=>{
        if(infosPage != null){
            axios.get(`http://localhost:8000/allimages/${infosPage.idProject}`)
            .then(({data})=>{
                data.forEach((image)=>{
                    setImages([...images,{NameImage:image.NameImage, description:image.Description}]);
                });
            });
        }
    },[infosPage]);

    useEffect(()=>{
        if(infosPage != null){
            axios.get(`http://localhost:8000/allvideos/${infosPage.idProject}`)
            .then(({data})=>{
                data.forEach((video)=>{
                    setVideos([...images,{NameVideo:video.NameVideo, description:video.Description}]);
                });
            });
        }
    },[infosPage]);

    function getImagePath(idproject,nameimage){
        axios.get(`http://localhost:8000/file/image/${idproject}/${nameimage}`)
        .then(({data})=>setPathImage(`http://localhost:8000/${data}`))
    }

    function getVideoPath(idproject,namevideo){
        axios.get(`http://localhost:8000/file/video/${idproject}/${namevideo}`)
        .then(({data})=>setPathVideo(`http://localhost:8000/${data}`))
    }

    return(
        <Container>
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
                {infosPage != '' &&
                    <>
                    {console.log('card',infosPage)}
                    <ContainerFluid center={true}>
                        <CardProject underlineAll={true} imageCard={infosPage.imageMain} description={infosPage.description} directionId={infosPage.idProject}  destination={null}/>
                    </ContainerFluid>
                    <ContainerFluid>
                        <TextAbout>
                            <SectionTitle>
                                Descrição do Projeto
                            </SectionTitle>
                            <p>{infosPage.textAbout}</p>
                        </TextAbout>
                        <ImageArea>
                            <SectionTitle>
                                Imagens Relacionadas
                            </SectionTitle>
                            {images.map((image,index)=>{
                                getImagePath(infosPage.idProject,image.NameImage)
                                if(pathImage != '')return (
                                    <MediaWrapper key={index}>
                                        <Image src={pathImage}/>
                                        <MediaDescription>{image.description}</MediaDescription>
                                    </MediaWrapper>
                                );
                            })}
                        </ImageArea>
                        <VideoArea>
                            <SectionTitle>
                                Vídeos Relacionados
                            </SectionTitle>
                            {videos.map((mp4, index)=>{
                                getVideoPath(infosPage.idProject,mp4.NameVideo);
                                if(pathVideo != ''){
                                    return(
                                        <MediaWrapper key={index}>
                                            <Video width="320" height="240" controls="controls">
                                                <source src={pathVideo} type='video/mp4'/>
                                            </Video>
                                            <MediaDescription>{mp4.description}</MediaDescription>
                                        </MediaWrapper>
                                    )
                                }
                            })}
                        </VideoArea>
                    </ContainerFluid>
                </>}
            </main>
            <Footer/>
        </Container>
    );
}