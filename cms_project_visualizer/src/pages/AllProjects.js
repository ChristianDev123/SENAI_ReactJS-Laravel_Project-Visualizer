import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormButtonInput from "../components/formbuttoninput/FormButtonInput";
import Sidebar from "../components/sidebar/Sidebar";
import { ActionWrapper, BtnAction, ButtonWrapper, Image, Main, SearchIcon, SearchInput, Table, TitlePage, Wrapper } from "../styles/AllProjectsStyles";
import axios from 'axios';
import ModalEdit from "../components/modaledit/ModalEdit";
import ConfirmationModal from "../components/confirmationmodal/ConfirmationModal";

export default function AllProjects(){
    const [content,setContent] = useState([]);
    const [currentNameProjectModal,setCurrentNameProjectModal] = useState('');
    const [typeProjectModal,setTypeProjectModal] = useState('machine');
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [searchBar,setSearchBar] = useState('');
    const [modalConfirmation,setModalConfirmation] = useState(false);
    const [confirmation,setConfirmation] = useState(false);
    const [nameRemoveProject,setNameRemoveProject] = useState('');

    useEffect(()=>{
        if(nameRemoveProject != ''){
            axios.delete(`http://localhost:8000/removeproject/${nameRemoveProject}`)
            .then(()=>updateContent());
        }
        setNameRemoveProject('');
    },[confirmation]);

    useEffect(()=>{updateContent()},[modalIsOpen]);

    useEffect(()=>{searchProject()},[searchBar])
    
    function updateContent(){
        axios.get('http://localhost:8000/')
        .then(({data})=>{
            const arrData = [];
            
            data.forEach((project)=>{
                const objTable = {
                    id:project.id,
                    image:`http://localhost:8000/img/${project.Type == 'machine'?'ImageMachines':'ImageProjects'}/${project.MainImageName}`,
                    nameProject:project.NameProject,
                    typeProject:project.Type
                };
                arrData.push(objTable)
            })
            setContent(arrData);
        })
    }

    function searchProject(){
        if(searchBar != ''){
            axios.get(`http://localhost:8000/${searchBar}`)
            .then(({data})=>{
                const arrData = [];
                data.forEach((project)=>{
                    const objTable = {
                        id:project.id,
                        image:`http://localhost:8000/img/${project.Type == 'machine'?'ImageMachines':'ImageProjects'}/${project.MainImageName}`,
                        nameProject:project.NameProject,
                        typeProject:project.Type
                    };
                    arrData.push(objTable)
                })
                setContent(arrData);})
        }else{
            updateContent();
        }
    }

    return (
        <>
            <Sidebar page="Ver Todos Projetos"/>
            <Main>
                <Wrapper row space_between>
                    <TitlePage>Projetos</TitlePage>
                    <div>
                        <SearchIcon/>
                        <SearchInput placeholder="Procurar por projeto..." onChange={(event)=>setSearchBar(event.target.value)} value={searchBar}/>
                    </div>
                    <ButtonWrapper>
                        <Link to='/'>
                            <FormButtonInput label="Novo" active /> 
                        </Link>
                    </ButtonWrapper>
                </Wrapper>
                <Wrapper>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Imagem do Projeto</th>
                                <th>Nome do Projeto</th>
                                <th>Tipo de Projeto</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.map((rowTable,index)=>{   
                                return(
                                    <tr key={index}>
                                        <td>{rowTable.id}</td>
                                        <td><Image src={rowTable.image} /></td>
                                        <td>{rowTable.nameProject}</td>
                                        <td>{rowTable.typeProject}</td>
                                        <td>
                                            <ActionWrapper>
                                                <BtnAction typeBtn="edit" onClick={()=>{
                                                    setModalIsOpen(!modalIsOpen);
                                                    setCurrentNameProjectModal(rowTable.nameProject);
                                                    setTypeProjectModal(rowTable.typeProject);
                                                }}>Editar</BtnAction>
                                                <BtnAction typeBtn="delete" onClick={()=>{
                                                    setCurrentNameProjectModal('');
                                                    setConfirmation(false);
                                                    setNameRemoveProject(rowTable.nameProject);
                                                    setModalConfirmation(true);
                                                }}>Deletar</BtnAction>
                                            </ActionWrapper>
                                        </td>
                                    </tr>
                                    )
                            })}
                        </tbody>
                    </Table>
                </Wrapper>
                <ConfirmationModal modalOpen={modalConfirmation} setConfirmation={setConfirmation} setModalOpen={setModalConfirmation}/>
                <ModalEdit typeProjectModal={typeProjectModal} setTypeProjectModal={setTypeProjectModal} currentNameProjectModal={currentNameProjectModal} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
            </Main>
        </>
    );
}