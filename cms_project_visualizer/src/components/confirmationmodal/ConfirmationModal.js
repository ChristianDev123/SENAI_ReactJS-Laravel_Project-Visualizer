import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { ActionWrapper, BtnAction, Message } from "./ConfirmationModalStyles";

export default function ConfirmationModal({setConfirmation,setModalOpen,modalOpen}){
    return(
        <Modal isOpen={modalOpen} toggle={()=>setModalOpen(!modalOpen)}>
            <ModalBody>
                <Message>Tem certeza de quer realizar esta ação?</Message>
            </ModalBody>
            <ModalFooter>
                <ActionWrapper end>
                    <BtnAction type="submit" confirmation sizeW="150px" typeBtn="send" onClick={()=>{
                        setConfirmation(true);
                        setModalOpen(false);
                    }}>
                        Confirmar
                    </BtnAction>
                    <BtnAction sizeW="150px" typeBtn="cancel" newValue={false} onClick={()=>setModalOpen(!modalOpen)}>
                        Cancelar
                    </BtnAction>
                </ActionWrapper>
            </ModalFooter>
        </Modal>
    );
}