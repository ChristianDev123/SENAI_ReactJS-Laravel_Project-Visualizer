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
    text-align: justify;
    padding:15px 0;
`;

export const ContainerFluid = styled.section`
    margin:20px 0;
    width:100%;
    height:100%;
    display:${({center})=>center?'inline':"flex"};
    flex-direction:column;
    align-items:center;
    justify-content:${({center})=>center?"center":''};
`;

export const TextButton = styled.p`
    font-size:20px;
    font-weight:bold;
`;

export const ImageArea = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 10px; 
    padding:15px 0;
`;

export const VideoArea = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 10px; 
    padding:15px 0;
`;

export const SectionTitle = styled.h3`
    font-size:25px;
    font-weight:700;
    margin:auto;
    max-width: 25ch;
    border-bottom:3px solid ${ColorPallet.detailLine};
`;

export const Image = styled.img`
    width:90%;
    border-radius:5px;
    box-shadow:5px 0 10px rgba(0,0,0,0.75);

`;

export const Video = styled.video`
    width:100%;
    border-radius: 5px;
    border:1px solid rgba(0,0,0,0.75);
    transition: 0.5s;
    &:hover{
        box-shadow:4px 4px 12px rgba(0,0,0,0.75);
    }
`;

export const MediaWrapper = styled.div`
    margin: 20px 0;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;

export const MediaDescription = styled.p`
    text-align:center;
    font-size: 15px;
    font-weight: 400;
`;

export const Container = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
`;