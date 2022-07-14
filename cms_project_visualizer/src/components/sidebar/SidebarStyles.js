import styled from 'styled-components';

export const Container = styled.section`
    position:absolute;
    background:var(--main-color-blue);
    height:100vh;
    width:15%;
`;

export const Logo = styled.img`
    width:70%;
`;

export const Wrapper = styled.div`
    margin-top:25px;
    width:100%;
    text-align:center;
`;

export const CurrentLinkPage = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

export const DetailPage = styled.div`
    background:var(--main-color-red);
    height:60px;
    width:6px;
`;

export const StrongLink = styled.strong`
    color:#fff;
    text-align:center;
    font-size: 1.1rem;
    cursor: default;
`;

export const LinkLabel = styled.p`
    color:white;
    padding:25px 0;
    font-size: 1.1rem;
    transition: 0.4s;
    &:hover{
        font-weight:bold;
    }
`;

export const DivAll = styled.div`
    width:100%;
    text-align:center;
`