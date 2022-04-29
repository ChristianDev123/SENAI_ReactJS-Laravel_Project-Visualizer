import styled from 'styled-components';
import ColorPallet from '../Styles/PaletaCores.json';

export const Line = styled.hr`
    width:100%;
    height:1.5px;
    background:${ColorPallet.primaryLineColor};
`;

export const MainConfig = styled.main`
    padding: 20px 0;
`;

export const TextAbout = styled.section`
    width:100%;
    height:100%;
    text-align: justify;
`;

export const ContainerFluid = styled.section`
    width:100vw;
    height:100%;
    padding:20px;
    display:${({center})=>center?'inline':"flex"};
    flex-direction:column;
    align-items:center;
    justify-content:${({center})=>center?"center":''};
`;

export const TextButton = styled.p`
    font-size:20px;
    font-weight:bold;
`;