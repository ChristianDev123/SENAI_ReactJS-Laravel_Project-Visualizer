import styled from 'styled-components';

export const ActionWrapper = styled.div`
    display:flex;
    justify-content:${({end})=>end?'flex-end':'center'};
    width:100%;
    gap:5px;
`;

export const BtnAction = styled.button`
    background:${({confirmation})=>confirmation?'var(--main-color-blue)':'var(--main-color-red)'};
    color:white;
    border:none;
    border-radius:5px;
    width:${({sizeW})=>sizeW != null? sizeW:'65px'};
    height:${({sizeH})=>sizeH != null?sizeH:'40px'};
    font-size:1rem;
`;

export const Message = styled.p`
    font-size:1.1rem;
`;