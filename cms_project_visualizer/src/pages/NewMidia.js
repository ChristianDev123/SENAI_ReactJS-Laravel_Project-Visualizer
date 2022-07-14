import { useState } from "react";
import FormButtonInput from "../components/formbuttoninput/FormButtonInput";
import FormFileInput from "../components/formfileinput/FormFileInput";
import FormTextInput from "../components/formtextinput/FormTextInput";
import Sidebar from "../components/sidebar/Sidebar";
import { ButtonWrapper, DivForm, DivTitle, ErrorLogMessage, Form, LogMessage, Main, TitleForm } from "../styles/NewMidiaStyles";
import { useForm } from 'react-hook-form';
import axios from "axios";

export default function NewMidia(){
    const [nameProject,setNameProject] = useState('');
    const [description,setDescription] = useState('');
    const [typeMidia,setTypeMidia] = useState('image');
    const [midia, setMidia] = useState('');
    const [sucessLog,setSucessLog] = useState('');
    const [errorLog, setErrorLog] = useState([]);
    const buttons = [
        {label:'Imagem', value:'image'},
        {label:'Video', value:'video'}
    ]
    const {register, handleSubmit} = useForm();
    
    function submitSendMidia(data){
        const formData = new FormData();
        formData.append(typeMidia,midia);
        formData.append('nameproject',data.projectName);
        formData.append(`description${typeMidia}`,data.descriptionMidia);
        axios.post(`http://localhost:8000/new${typeMidia}`,formData)
        .then(({data})=>setSucessLog(data))
        .catch((err)=>setErrorLog(err));
    }

    function errorSubmit(dataError){
        const arrNames = ['projectName','descriptionMidia','newMidia'];
        arrNames.forEach((name)=>{
            if(dataError[name] != undefined) setErrorLog(dataError[name]);
        })
    }

    return (
        <>
            <Sidebar page="Adicionar Midia"/>
            <Main>            
                <DivForm row space_between outForm>
                    {buttons.map((btn, index)=>{
                        if(btn.value == typeMidia) return createBtn(true,btn.label,btn.value,setTypeMidia, index, true) ;
                        else return createBtn(false, btn.label, btn.value, setTypeMidia,index, true);
                    })}
                </DivForm>
                <Form onSubmit={handleSubmit(submitSendMidia, errorSubmit)}>
                    <TitleForm>Inserindo {typeMidia == 'image'?'nova imagem':'novo vídeo'}</TitleForm>
                    <DivForm>
                        <FormTextInput message='O nome do projeto deve ser informado!' register={register} nameInput='projectName' id="nameproject" label="Nome do Projeto" placeholder="name project" setState={setNameProject} state={nameProject}/>
                    </DivForm>
                    <DivForm>
                        <FormTextInput message={typeMidia == 'image'?'Uma descrição a imagem deve ser inserida':'Uma descrição ao video deve ser inserido'}  register={register} nameInput='descriptionMidia' id="descriptionMidia" label={typeMidia == 'image'?'Descrição da imagem':'Descrição do vídeo'} placeholder="description" setState={setDescription} state={description}/>
                    </DivForm>
                    <DivForm>
                        <DivTitle>{typeMidia == 'image'?'Imagem a ser inserida':'Video a ser inserido'}</DivTitle>
                        <FormFileInput acceptTypes={typeMidia == 'image'?'image/*':'video/mp4'} register={register} nameInput='newMidia' message='Uma Mídia deve ser inserida!' id="mainimage" label={typeMidia == 'image'?"Imagem":'Video'} setState={setMidia} state={midia}/>
                    </DivForm>
                    <FormButtonInput submit/>
                    {errorLog.length != 0 && <LogMessage error>{errorLog.message}</LogMessage>}
                    {sucessLog != '' && <LogMessage sucess>{sucessLog}</LogMessage>}
                </Form>
            </Main>
        </>
    );
}

function createBtn(active=false, label, newValue, setState, index, outForm=false){
    return(
        <ButtonWrapper key={index}>
            <FormButtonInput outForm={outForm} active={active} label={label} newValue={newValue} setState={setState}/>
        </ButtonWrapper>
    );
}