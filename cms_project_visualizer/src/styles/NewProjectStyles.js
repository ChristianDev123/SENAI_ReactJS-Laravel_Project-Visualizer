import styled from 'styled-components';

export const Main = styled.main`
    margin-left:15%;
    display:flex;
    flex-direction: column;
    align-items:center;
`;

export const TitleForm = styled.h3`
    font-size:2rem;
`;

export const Form = styled.form`
    width:40%;
    margin:auto;
`;

export const DivForm = styled.div`
    margin:20px 0;
    display:flex;
    flex-direction: ${({row})=>row?'row':'column'};
    ${({space_between})=>space_between&&'justify-content: space-between'}
`;

export const ButtonWrapper = styled.div`
    width:37%;
`;

export const DivTitle = styled.h6`
    font-size:1.2rem;
    display:block;
    margin-bottom:2px;
    font-weight: 400;
`;

export const LogMessage = styled.p`
    color:${({sucess})=>sucess?'green':'red'};
    width:100%;
    text-align:center;
    padding:10px 0;
`;