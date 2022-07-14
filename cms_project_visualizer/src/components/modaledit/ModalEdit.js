import FormTextInput from "../formtextinput/FormTextInput";
import FormFileInput from "../formfileinput/FormFileInput";
import FormTextarea from "../formtextarea/FormTextarea";
import FormButtonInput from "../formbuttoninput/FormButtonInput";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ActionWrapper, BtnAction, ButtonWrapper, DivForm, DivTitle, Form, LogMessage, Wrapper } from "./ModalEditStyles";
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useEffect, useState } from "react";

export default function ModalEdit({currentNameProjectModal,modalIsOpen, setModalIsOpen, typeProjectModal, setTypeProjectModal}){
    const [errorLog, setErrorLog] = useState([]);
    const [sucessLog,setSucessLog] = useState('');
    const [newAboutText,setNewAboutText] = useState('');
    const [newMainImage,setNewMainImage] = useState('');
    const [newNameProjectModal,setNewNameProjectModal] = useState('');
    const {register, handleSubmit} = useForm();
    const buttonsModal = [
        {label:'Máquina', value:'machine'},
        {label:'Projeto', value:'project'}
    ]

    useEffect(()=>{
        setErrorLog([]);
        setSucessLog('');
    },[])

    function submitSendMidia(data){
        const formData = new FormData();
        formData.append('mainimage',newMainImage);
        formData.append('currentname',currentNameProjectModal);
        formData.append('newname',data.newNameProject);
        formData.append('text',data.newTextAbout);
        formData.append('type',typeProjectModal);
        axios.post(`http://localhost:8000/updateproject`,formData)
        .then(({data})=>{
            setSucessLog(data)
            setTimeout(()=>setModalIsOpen(false),2000);
        })
        .catch((data)=>console.log(data));
    }

    function errorSubmit(dataError){
        const arrNames = ['newNameProject','newImageProject', 'newTextAbout'];
        arrNames.forEach((name)=>{
            if(dataError[name] != undefined) setErrorLog(dataError[name]);
        })
    } 

    return(
        <Modal isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
            <ModalHeader>
                Editando Projeto
            </ModalHeader>
            <Form onSubmit={handleSubmit(submitSendMidia,errorSubmit)}>
                <ModalBody>
                    <DivForm>
                        <h2>{newNameProjectModal != ''? newNameProjectModal:currentNameProjectModal}</h2>
                        <p>{typeProjectModal}</p>
                    </DivForm>
                    <DivForm>
                        <FormTextInput register={register} message="Insira um novo nome ao projeto!" nameInput='newNameProject' label="Novo Nome do Projeto" id="newNameProject" placeholder="new name project" setState={setNewNameProjectModal} state={newNameProjectModal}/>
                    </DivForm>
                    <DivForm>
                        <DivTitle>Tipo de Projeto</DivTitle>
                        <Wrapper row space_between>
                            {buttonsModal.map((btn,index)=>{
                                if(btn.value == typeProjectModal) return createBtn(true,btn.label,btn.value,setTypeProjectModal,index);
                                else return createBtn(false,btn.label,btn.value,setTypeProjectModal,index);
                            })}
                        </Wrapper>
                    </DivForm>
                    <DivForm>
                        <DivTitle>Principal Imagem do Post</DivTitle>
                        <FormFileInput acceptTypes='image/*' register={register} message='Insira uma nova imagem principal ao projeto!' nameInput='newImageProject' id='newMainImage' label="Imagem" setState={setNewMainImage} state={newMainImage}/>
                    </DivForm>
                    <DivForm>
                        <FormTextarea register={register} message='Insira um novo texto sobre o projeto!' nameInput='newTextAbout' id='newAboutText' label='Texto sobre o projeto' placeholder='text about' setState={setNewAboutText} state={newAboutText} />
                    </DivForm>
                    {errorLog.length != 0 && <LogMessage error>{errorLog.message}</LogMessage>}
                    {sucessLog != '' && <LogMessage sucess>{sucessLog}</LogMessage>}
                </ModalBody>
                <ModalFooter>
                    <ActionWrapper end>
                        <BtnAction type="submit" sizeW="150px" typeBtn="send" active >
                            Enviar
                        </BtnAction>
                        <BtnAction sizeW="150px" typeBtn="cancel" newValue={false} onClick={()=>setModalIsOpen(!modalIsOpen)}>
                            Cancelar
                        </BtnAction>
                    </ActionWrapper>
                </ModalFooter>
            </Form>
        </Modal>
    );
}

function createBtn(active=false, label, newValue, setState, index){
    return(
        <ButtonWrapper key={index}>
            <FormButtonInput active={active} label={label} newValue={newValue} setState={setState}/>
        </ButtonWrapper>
    );
}