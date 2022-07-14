import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    display:block;
`;

export const Input = styled.input`
    display:none;
`;

export const Label = styled.label`
    font-size:1.2rem;
    display:block;
    border-radius:4px;
    border:${({active})=>active?'none':'2px solid var(--main-color-blue)'};
    width:calc(37% - 2px);
    padding:0.6rem 0;
    transition:.5s;
    background:${({active})=>active?'var(--main-color-blue)':'transparent'};
    color:${({active})=>active?'#fff':'#000'};
    text-align:center;
    &:hover{
        background:var(--main-color-blue);
        color:#fff;
    }
`;