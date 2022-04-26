import { Box, Container, Grid } from "@mui/material";
import PaletaCores from '../../../Styles/PaletaCores.json';

export default function Footer(){
    return(
        <>
        <Grid
        container
        flexDirection="column"
        sx={{
            color:PaletaCores.white,
            textAlign:"center",
        }}
        >
            <Box
                style={{
                        backgroundColor:PaletaCores.primaryFooter,
                        padding:'28px 0 0 0',
                }}
            >
                <span>Escola SENAI Suiço-Brasileira Paulo Ernesto Tolle</span>
                <p>Rua Bento Branco de Andrade Filho, 379 - Santo Amaro - São Paulo/SP - CEP 04757-000</p>
                <p>Telefone: (11) 5642-3400 |E-mail:secretaria115@sp.senai.br</p>
                <hr />
            </Box>
            <Box
                style={{
                        backgroundColor:PaletaCores.secundaryFooter,
                        textAlign:"center"
                    }}
            >
                <p>Copyright 2022 © Todos os direitos reservados.</p>
                <p>O conteúdo do site não pode ser editado, copiado ou distribuído sem expressa autorização do SENAI-SP.</p>
            </Box>
        </Grid>
        <style jsx>{`
        span{
            font-weight: bold; 
        }
        hr{
            width:100%;
            height:5px;
            color:white;
            background: white;
            border:none;
        }
        `}</style>
        </>
    );
}