import styled from 'styled-components';

export const ContainerAll = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`;

export const TextButton = styled.p`
    font-size:55px; 
    padding:50px 0;
    @media screen and (max-width:600px){
        padding:10px 0;
    }
    @media screen and (max-width:900px){
        padding:25px 0;
    }
    @media screen and (max-width:1200px){
        padding:40px 0;
    }
`;

export const ButtonTextWrapper = styled.div`
  padding: 0 150px;
`;