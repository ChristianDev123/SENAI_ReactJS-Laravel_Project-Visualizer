import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    ${({outForm})=>outForm&&'margin-top:60px'}
`;

export const Input = styled.input`
    border-radius:4px;
    border:none;
    width:100%;
    padding:${({outForm})=>outForm?'1rem 0':'0.6rem 0'};
    ${({outForm})=>outForm&&'font-weight:bold'};
    font-size:1.1rem;
    transition:.5s;
    background:${({active})=>active?'var(--main-color-blue)':'#ccc'};
    color:${({active})=>active?'#fff':'#000'};
    display:inline-block;
    &:hover{
        background:var(--main-color-blue);
        color:#fff;
    }
    &[type='submit']{
        margin-top: 10px;
    }
`;