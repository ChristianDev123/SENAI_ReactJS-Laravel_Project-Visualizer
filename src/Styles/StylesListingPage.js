import styled from 'styled-components';
import ColorPallet from './PaletaCores.json';

export const TextButton = styled.p`
    font-size:20px;
    padding:10px 0;
    color:${ColorPallet.white};
`;

export const Line = styled.hr`
    width:100%;
    height:1.5px;
    background:${ColorPallet.primaryLineColor};
`;