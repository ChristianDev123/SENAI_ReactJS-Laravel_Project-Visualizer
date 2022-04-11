import LogoSenai from '../../Assets/img/LogoSenai.png';
import { Grid } from "@mui/material";
import Image from "next/image";

export default function HeaderStatic(props){
    return(
        <>
            <Grid
                container
                sx={{
                    justifyContent:"space-between",
                    padding:"70px 45px 0 45px",
                }}
            >
                <Grid 
                    item 
                    xl={5}
                    lg={5}
                    md={6}
                    sm={12}
                    xs={12}
                    textAlign="center"
                >
                    <Image
                        src={LogoSenai}
                        unsized
                        alt="Logomarca Senai"
                    />
                </Grid>
                <Grid 
                    item 
                    xl={5}
                    lg={5}
                    md={6}
                    sm={12}
                    xs={12}
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    padding="15px"
                >
                    <span>São Paulo - Santo Amaro</span>
                    <p>Suíço-Brasileira Paulo Ernesto Tolle</p>
                </Grid>
                <Grid 
                    item 
                    xl={2}
                    lg={2}
                    md={12}
                    sm={12}
                    xs={12}
                >
                    {props.button}
                </Grid>
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