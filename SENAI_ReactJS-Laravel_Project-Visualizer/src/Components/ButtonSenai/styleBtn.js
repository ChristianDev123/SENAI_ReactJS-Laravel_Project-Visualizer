import styled from 'styled-components';
import PaletaCores from '../../Styles/PaletaCores.json';

export const SenaiBtn = styled.button`
    width:100%;
    height:100%;
    background:${PaletaCores.primary};
    color:${PaletaCores.white};
    border:none;
    border-radius:15px;
    &:hover{
        background: ${PaletaCores.buttonHoverColor};
        transition:.7s;
    }
`;