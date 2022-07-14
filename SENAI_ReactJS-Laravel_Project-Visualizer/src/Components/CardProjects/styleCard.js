import styled from 'styled-components';
import ColorPallet from '../../Styles/PaletaCores.json'

export const Line = styled.hr`
    background: ${ColorPallet.detailLine};
    height:2px;
    width:100%;
    border:1px solid ${ColorPallet.detailLine};
`;

export const ImageProject = styled.img`
    width:50%;
`;

export const Description = styled.h2`
    text-align:${({underlineAll})=>underlineAll?'center':'justify'};
    font-size: 1.7rem;
    font-weight: 600;
    width:100%;
`;