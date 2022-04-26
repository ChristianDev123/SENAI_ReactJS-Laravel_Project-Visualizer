import { AppBar, Box, Grid, Toolbar, useMediaQuery } from "@mui/material";
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
            background:ColorPallet.primary,
            color:`${ColorPallet.white}`,
        },
        boxImage:{
            borderRight: `1px solid ${ColorPallet.white}`,
            borderLeft:`1px solid ${ColorPallet.white}`,
            padding:"2px 4px"
        },
        BoxText:{
            padding:"0 15px"
        }
    }
    const device = useMediaQuery("(max-width:500px)");
    return(
        <>
            <AppBar
                container
                position="fixed"
                style={stylization.container}
            >
                <Toolbar style={device == false?
                    {display:"flex", justifyContent:"flex-end"}
                    :
                    {display:"flex", justifyContent:"center", alignItems:"center"}
                    }>
                <Box style={stylization.BoxText} xs="2">
                    <p>FIESP</p>
                </Box>
                <Box style={stylization.BoxText} xs="2">
                    <p>CIESP</p>
                </Box>
                <Box style={stylization.BoxText} xs="2">
                    <p>SESI</p>
                </Box>
                <Box style={stylization.BoxText} xs="2">
                    <p>SENAI</p>
                </Box>
                <Box style={stylization.BoxText} xs="2">
                    <p>IRS</p>
                </Box>
                {!device &&
                    <>
                    <Box className="boxImage" style={stylization.boxImage} xs="2">
                        <Image
                            src={Facebook}
                            unsized
                        />
                    </Box>
                    <Box className="boxImage" style={stylization.boxImage} xs="2">
                        <Image
                            src={TwiterIcon}
                            unsized
                        />
                    </Box>
                    <Box className="boxImage" style={stylization.boxImage} xs="2">
                        <Image
                            src={YoutubeIcon}
                            unsized
                        />
                    </Box>
                    <Box className="boxImage" style={stylization.boxImage} xs="2">
                        <Image
                            src={LinkedinIcon}
                            unsized
                        />
                    </Box>   
                    </>
                }
                </Toolbar>
            </AppBar>
        </>
    );
}