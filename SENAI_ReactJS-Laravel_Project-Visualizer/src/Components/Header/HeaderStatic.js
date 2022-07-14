import LogoSenai from '../../Assets/img/LogoSenai.png';
import { Grid } from "@mui/material";
import { Address, Image, School } from './StyleHeader';

export default function HeaderStatic({button}){
    return(
        <>
            <Grid
                container
                sx={{
                    justifyContent:"space-between",
                    padding:"70px 45px 0 45px",
                }}
            >
                <Grid item 
                    lg={5}
                    md={6}
                    xs={12}
                    textAlign="center"
                >
                    <Image src={LogoSenai} alt="Logomarca Senai"/>
                </Grid>
                <Grid 
                    item
                    lg={5}
                    md={6}
                    xs={12}
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    padding="15px"
                >
                    <Address>São Paulo - Santo Amaro</Address>
                    <School>Suíço-Brasileira Paulo Ernesto Tolle</School>
                </Grid>
                <Grid item 
                    lg={2}
                    xs={12}
                >
                    {button}
                </Grid>
            </Grid>
        </>
    );
}