import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const Label = styled.label`
    font-size:1.2rem;
    display:block;
    margin-bottom:2px;
    font-weight: 400;
`;

export const Textarea = styled.textarea`
    width:calc(100% - 10px);
    max-height:8rem;
    height:200px;
    padding:5px;
    &::placeholder{
        font-size:1rem;
    }
`;