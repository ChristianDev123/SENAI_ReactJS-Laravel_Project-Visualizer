import LogoSenai from '../../Assets/img/LogoSenai.png';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import ColorPallet from '../../../Styles/PaletaCores.json'

export default function HeaderStatic(props){
    const stylization = {
        boxesFlex:{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent:"center",
            textAlign:'justify',
        }
    }

    return(
        <>
            <Grid
                container
                style={{
                    display:"flex",
                    justifyContent:'space-between',
                    padding:"30px 45px 0 45px"
                }}
            >
                <Box style={stylization.boxesFlex}>
                    <Image
                        src={LogoSenai}
                        unsized
                        alt="Logomarca Senai"
                    />
                </Box>
                <Box style={stylization.boxesFlex}>
                    <span>São Paulo - Santo Amaro</span>
                    <p>Suíço-Brasileira Paulo Ernesto Tolle</p>
                </Box>
                <Box>
                    {props.button}
                </Box>
            </Grid>
            <style jsx>{`
                span{
                    font-size:20;
                    color: rgba(0,0,0,0.5);
                }
                p{
                    font-size:25px;
                    color: rgba(0,0,0,0.75)
                }
            `}</style>
        </>
    );
}