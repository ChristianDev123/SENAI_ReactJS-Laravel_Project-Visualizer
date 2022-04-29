import { Grid, useMediaQuery} from "@mui/material";
import { Link } from "react-router-dom";
import { Line } from "./styleCard";

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
};

export default function CardProject({directionId, description, imageCard, destination='', underlineAll}){
    const device = useMediaQuery('(min-width:900)');
    return(
        <Link to={destination != null?`/project-page/${destination}`:''} style={destination != null?
            {textDecoration:'none',color:'black'}:{textDecoration:'none',color:'black',cursor:'default'}}>
            <Grid 
                container
                styles={stylization.container}
                sx={underlineAll?'':
                    {":hover":{
                        padding:"15px",
                        transition:".7s"
                    }}}
                paddingX={underlineAll?10:''}
            >
                {directionId%2 === 0
                ?
                <>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        textAlign="center"
                    >
                        <img src={imageCard} alt=""/>
                        {!underlineAll && <Line/>}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        style={stylization.boxDescription}
                    >
                        <p>
                            {description}
                        </p>
                    </Grid>
                    {underlineAll &&
                        <Grid item xs={device?6:12}>
                            <Line/>
                        </Grid>
                    }
                </>    
                :
                <>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        style={stylization.boxDescription}
                    >
                    <p>
                        {description}
                    </p>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        textAlign="center"
                    >
                        <img src={imageCard} alt=""/>
                        <Line/>
                    </Grid>
                </>}
            </Grid>
        </Link>
    );
}