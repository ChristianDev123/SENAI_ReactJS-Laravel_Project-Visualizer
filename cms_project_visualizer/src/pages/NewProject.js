import { useState } from 'react';
import FormButtonInput from '../components/formbuttoninput/FormButtonInput';
import FormFileInput from '../components/formfileinput/FormFileInput';
import FormTextarea from '../components/formtextarea/FormTextarea';
import FormTextInput from '../components/formtextinput/FormTextInput';
import Sidebar from '../components/sidebar/Sidebar';
import { ButtonWrapper, DivForm, DivTitle, Form, LogMessage, Main, TitleForm } from '../styles/NewProjectStyles';
import { useForm } from 'react-hook-form'
import axios from 'axios';

export default function NewProject(){
    const [nameProject,setNameProject] = useState('');
    const [typeProject,setTypeProject] = useState('machine');
    const [mainImage,setMainImage] = useState('');
    const [textAbout,setTextAbout] = useState('');
    const [errorLog,setErrorLog] = useState([]);
    const [sucessLog,setSucessLog] = useState('');
    const {register, handleSubmit} = useForm();
    const buttons = [
        {label:'Máquina', value:'machine'},
        {label:'Projeto', value:'project'}
    ]
    
    function SucessfulSubmit(data){
        const formData = new FormData();
        formData.append('mainimage',mainImage);
        formData.append('name',data.projectName);
        formData.append('text',data.textAboutProject)
        formData.append('type',typeProject)
        axios.post('http://localhost:8000/newproject',formData)
        .then(({data})=>setSucessLog(data))
        .catch((err)=>setErrorLog(err));       
    }
    
    function ErrorSubmit(dataError){
        const arrNames = ['projectName','mainImageProject','textAboutProject'];
        arrNames.forEach((name)=>{
            if(dataError[name] != undefined) setErrorLog(dataError[name]);
        })
    }
    
    return (
        <>
            <Sidebar/>
            <Main>
                <Form onSubmit={handleSubmit(SucessfulSubmit,ErrorSubmit)}>
                    <TitleForm>Criando um novo projeto</TitleForm>
                    <DivForm>
                        <FormTextInput message='O nome do projeto deve ser informado!' register={register} nameInput="projectName" id="nameproject" label="Nome do Projeto" placeholder="name project" setState={setNameProject} state={nameProject}/>
                    </DivForm>
                    <DivForm>
                        <DivTitle>Tipo de Projeto</DivTitle>
                        <DivForm row space_between>
                            {buttons.map((btn, index)=>{
                                if(btn.value == typeProject) return createBtn(true,btn.label,btn.value,setTypeProject, index) ;
                                else return createBtn(false, btn.label, btn.value, setTypeProject,index);
                            })}
                        </DivForm>
                    </DivForm>
                    <DivForm>
                        <DivTitle>Principal Imagem do Post</DivTitle>
                        <FormFileInput acceptTypes='image/*' message='Uma imagem principal deve ser inserida no projeto!' register={register} nameInput='mainImageProject' id="mainimage" label="Imagem" setState={setMainImage} state={mainImage}/>
                    </DivForm>
                    <DivForm>
                        <FormTextarea placeholder="about project" message='O projeto deve conter uma descrição (about project) !' register={register} nameInput="textAboutProject" id="textabout" label="Texto sobre o Projeto" setState={setTextAbout} state={textAbout}/>
                    </DivForm>
                    <FormButtonInput submit/>
                    {errorLog.length != 0 && <LogMessage error>{errorLog.message}</LogMessage>}
                    {sucessLog != '' && <LogMessage sucess>{sucessLog}</LogMessage>}
                </Form>
            </Main>
        </>
    );
}

function createBtn(active=false, label, newValue, setState, index ){
    return(
        <ButtonWrapper key={index}>
            <FormButtonInput active={active} label={label} newValue={newValue} setState={setState}/>
        </ButtonWrapper>
    );
}