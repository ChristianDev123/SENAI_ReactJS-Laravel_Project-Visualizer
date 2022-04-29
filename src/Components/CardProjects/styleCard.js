import styled from 'styled-components';
import ColorPallet from '../../Styles/PaletaCores.json'

export const Line = styled.hr`
    background: ${ColorPallet.detailLine};
    height:2px;
    width:100%;
    border:1px solid ${ColorPallet.detailLine};
`;