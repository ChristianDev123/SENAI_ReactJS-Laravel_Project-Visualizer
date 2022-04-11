import { Box, Grid} from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/router";
import ColorPallet from '../../../Styles/PaletaCores.json'
export default function CardProject({directionId, description, imageCard, destination}){
    const router = useRouter();
    const stylization = {
        container:{
            width:"100%",
            height:'100%',
        },
        boxDescription:{
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',
            textAlign:'justify',
            padding:"20px",
        }   
    }
    return(
        <Grid 
            container
            styles={stylization.container}
            onClick={()=>{
                router.push(`/projectPage?searchPage=${destination}`)
            }}
        >
        {directionId%2 == 0
        ?
        <>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                textAlign="center"
            >
                <Image
                    src={imageCard}
                />
                <hr/>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                style={stylization.boxDescription}
            >
                {description}
            </Grid>
        </>    
        :
        <>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                style={stylization.boxDescription}
            >
                {description}
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                textAlign="center"
            >
                <Image
                    src={imageCard}
                    resonsive
                    fill={true}
                />
                <hr/>
            </Grid>
        </>
        }
        <style jsx>{`
            hr{
                background: ${ColorPallet.detailLine};
                height:2px;

            }
        `}</style>
        </Grid>
    );
}