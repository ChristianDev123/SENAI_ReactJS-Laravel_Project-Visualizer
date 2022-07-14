import { Box, Grid } from "@mui/material";
import ColorPallet from '../../Styles/PaletaCores.json';
import { Line, School } from "./stylesHeader";

export default function Footer(){
    return(
        <footer>
            <Grid
            container
            flexDirection="column"
            sx={{
                color:ColorPallet.white,
                textAlign:"center",
            }}
            >
                <Box style={{
                            backgroundColor:ColorPallet.primaryFooter,
                            padding:'28px 0 0 0',
                    }}
                >
                    <School>Escola SENAI Suiço-Brasileira Paulo Ernesto Tolle</School>
                    <p>Rua Bento Branco de Andrade Filho, 379 - Santo Amaro - São Paulo/SP - CEP 04757-000</p>
                    <p>Telefone: (11) 5642-3400 |E-mail:secretaria115@sp.senai.br</p>
                    <Line />
                </Box>
                <Box style={{
                            backgroundColor:ColorPallet.secundaryFooter,
                            textAlign:"center"
                    }}
                >
                    <p>Copyright 2022 © Todos os direitos reservados.</p>
                    <p>O conteúdo do site não pode ser editado, copiado ou distribuído sem expressa autorização do SENAI-SP.</p>
                </Box>
            </Grid>
        </footer>
    );
}