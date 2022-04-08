import { Box, Grid } from "@mui/material";
import Image from 'next/image'
import ColorPallet from '../../../Styles/PaletaCores.json'
import Facebook from '../../Assets/img/Facebook.png';
import LinkedinIcon from '../../Assets/img/Linkedin.png';
import TwiterIcon from '../../Assets/img/Twiter.png';
import YoutubeIcon from '../../Assets/img/Youtube.png';

export default function HeaderFixedTop(){
    const stylization = {
        container:{
            padding:0,
            width:"100%",
            display:"flex",
            background:ColorPallet.primary,
            justifyContent: 'flex-end',
            position:"relative"
        },
        boxImage:{
            borderRight: `1px solid ${ColorPallet.white}`,
            borderLeft:`1px solid ${ColorPallet.white}`,
            padding:"2px 4px"
        },
        BoxText:{
            color:`${ColorPallet.white}`,
            padding:"0 15px"
        }
    }
    return(
        <>
            <Grid
                container
                style={stylization.container}
            >
                <Box style={stylization.BoxText}>
                    <p>FIESP</p>
                </Box>
                <Box style={stylization.BoxText}>
                    <p>CIESP</p>
                </Box>
                <Box style={stylization.BoxText}>
                    <p>SESI</p>
                </Box>
                <Box style={stylization.BoxText}>
                    <p>SENAI</p>
                </Box>
                <Box style={stylization.BoxText}>
                    <p>IRS</p>
                </Box>
                 <Box style={stylization.boxImage}>
                     <Image
                        src={Facebook}
                        unsized
                     />
                </Box>
                <Box style={stylization.boxImage}>
                    <Image
                        src={TwiterIcon}
                        unsized
                    />
                </Box>
                <Box style={stylization.boxImage}>
                    <Image
                        src={YoutubeIcon}
                        unsized
                    />
                </Box>
                <Box style={stylization.boxImage}>
                    <Image
                        src={LinkedinIcon}
                        unsized
                    />
                </Box>
            </Grid>
        </>
    );
}