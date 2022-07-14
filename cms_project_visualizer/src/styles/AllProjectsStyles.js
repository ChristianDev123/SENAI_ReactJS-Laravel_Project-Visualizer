import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search'


export const Main = styled.main`
    margin-left:15%;
    padding:50px 20px;
`;

export const TitlePage = styled.h2`
    font-size:2rem;
    font-weight:400;
`;

export const SearchInput = styled.input`
    height:35px;
    border:0;
    border-bottom: 1px solid var(--main-color-blue);
    padding-left:50px;
    &:focus{
        outline:0;
    }
`; 

export const SearchIcon = styled(Search)`
    width:35px;
    height:35px;
    color:var(--main-color-blue);
    opacity:.8;
    position:absolute;
`;

export const ButtonWrapper = styled.div`
    width:10%;
`;

export const Table = styled.table`
    text-align:center;
`;

export const BtnAction = styled.button`
    background:${({typeBtn,active})=>active?'var(--main-color-blue)':chooseColor(typeBtn)};
    color:white;
    border:none;
    border-radius:5px;
    width:${({sizeW})=>sizeW != null? sizeW:'65px'};
    height:${({sizeH})=>sizeH != null?sizeH:'40px'};
    font-size:1rem;
`;

function chooseColor(type){
    let color;
    switch(type){
        case 'edit':
            color = 'var(--main-color-blue)';
        break
        case 'delete':
            color = 'var(--main-color-red)';
        break
        case 'send':
            color = 'var(--main-color-blue)'
        break
        case 'cancel':
            color = '#ccc';
        break
    }
    return color;
}

export const Image = styled.img`
    width:30%;
    max-height:80px;
    padding:5px 0;
`;

export const Wrapper = styled.section`
    width:100%;
    margin:70px auto;
    display:flex;
    flex-direction:${({row})=>row?'row':'column'};
    ${({space_between})=>space_between&&'justify-content:space-between'}
    ${({space_around})=>space_around&&'justify-content:space-around'}
`;

export const ActionWrapper = styled.div`
    display:flex;
    justify-content:${({end})=>end?'flex-end':'center'};
    width:100%;
    gap:5px;
`;