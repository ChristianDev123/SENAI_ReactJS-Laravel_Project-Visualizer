import { Box, Grid } from '@mui/material';
import Image from 'next/image'
import ColorPallet from '../../../Styles/PaletaCores.json'
export default function CardProject(props){
    const stylization = {
        container:{
            display:"flex",
            height:"100%",
            width:"100%"
        },
        boxImage:{
            width:'100%',
            height:"100%"
        },
        boxDescription:{
            width:"100%",
            height:"100%",
            padding:"10px"
        }
    }
    return(
        <>
            <Grid container style={stylization.container}>
            {props.directionId%2 === 0 
            ?
                <>
                    <Box>
                        <Image
                            src={props.imageCard}
                            alt={props.imageDescription}
                            style={stylization.boxImage}
                            unsized
                        />
                        <hr/>
                    </Box>
                    <Box>
                        {props.description}
                    </Box>
                </>
            :
                <>
                    <Box>
                        {props.description}
                    </Box>
                    <Box>
                        <Image
                            src={props.imageCard}
                            alt={props.imageDescription}
                            style={stylization.boxImage}
                            unsized
                        />
                        <hr/>
                    </Box>
                </>
            }
            </Grid>
            <style jsx>{`
                hr{
                    height:6px;
                    width:100%;
                    background:${ColorPallet.detailLine};
                    color:${ColorPallet.detailLine};
                } 
            `}</style>
        </>
    );
}