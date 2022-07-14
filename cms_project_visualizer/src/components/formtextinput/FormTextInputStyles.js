import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    display:block;
`;

export const Input = styled.input`
    padding:7px;
    border:1px solid var(--border-input);
    width:calc(100% - 1rem - 5px);
    border-radius:4px;
    transition:.5s;
    &::placeholder{
        font-size:1rem;
    }
    &:hover{
        border:1px solid rgba(0,0,0,0.75);
    }
    &:focus{
        outline:0;
        border:1px solid rgba(0,0,0,0.75);
    }
`;

export const Label = styled.label`
    font-size:1.2rem;
    display:block;
    margin-bottom:2px;
`;