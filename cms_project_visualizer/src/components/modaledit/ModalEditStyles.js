import styled from "styled-components";

export const ActionWrapper = styled.div`
    display:flex;
    justify-content:${({end})=>end?'flex-end':'center'};
    width:100%;
    gap:5px;
`;

export const BtnAction = styled.button`
    background:${({typeBtn,active})=>active?'var(--main-color-blue)':chooseColor(typeBtn)};
    color:white;
    border:none;
    border-radius:5px;
    width:${({sizeW})=>sizeW != null? sizeW:'65px'};
    height:${({sizeH})=>sizeH != null?sizeH:'40px'};
    font-size:1rem;
`;

function chooseColor(type){
    let color;
    switch(type){
        case 'edit':
            color = 'var(--main-color-blue)';
        break
        case 'delete':
            color = 'var(--main-color-red)';
        break
        case 'send':
            color = 'var(--main-color-blue)'
        break
        case 'cancel':
            color = '#ccc';
        break
    }
    return color;
}

export const DivForm = styled.div`
    margin:20px 0;
    display:flex;
    flex-direction: ${({row})=>row?'row':'column'};
    ${({space_between})=>space_between&&'justify-content: space-between'}
`;

export const DivTitle = styled.h6`
    font-size:1.2rem;
    display:block;
    margin-bottom:2px;
    font-weight: 400;
`;

export const Form = styled.form`
`;

export const LogMessage = styled.p`
    color:${({sucess})=>sucess?'green':'red'};
    width:100%;
    text-align:center;
    padding:10px 0;
`;

export const Wrapper = styled.section`
    width:100%;
    margin:70px auto;
    display:flex;
    flex-direction:${({row})=>row?'row':'column'};
    ${({space_between})=>space_between&&'justify-content:space-between'}
    ${({space_around})=>space_around&&'justify-content:space-around'}
`;

export const ButtonWrapper = styled.div`
    width:37%;
`;