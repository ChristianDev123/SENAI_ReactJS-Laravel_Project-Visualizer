import { Grid, useMediaQuery} from "@mui/material";
import { Link } from "react-router-dom";
import { Line , ImageProject, Description} from "./styleCard";
import axios from "axios";
import { useEffect, useState } from "react";

const stylization = {
    container:{
        width:"100%",
        height:'100%',
    },
    boxDescription:{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        padding:"20px",
    }   
};

export default function CardProject({directionId, description, imageCard, destination='', underlineAll}){
    const device = useMediaQuery('(min-width:900)');
    const [image,setImage] = useState('');
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/file/image/${directionId}/${imageCard}`)
        .then(({data})=>setImage(`http://localhost:8000/${data}`));
    },[]);
    
    return(
        <Link to={destination != null?`/project-page/${destination}`:''} 
        style={destination != null?
            {textDecoration:'none',color:'black',width:"80%"}
            :
            {textDecoration:'none',color:'black',cursor:'default'}}>
            <Grid 
                container
                styles={stylization.container}
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
                        justifyContent='flex-end'
                        alignItems='flex-end'
                    >
                        <ImageProject src={image} alt="Imagem principal do projeto"/>
                        {!underlineAll && <Line/>}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        style={stylization.boxDescription}
                    >
                        <Description underlineAll={underlineAll}>
                            {description}
                        </Description>
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
                    <Description underlineAll={underlineAll}>
                        {description}
                    </Description>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        textAlign="center"
                    >
                        <ImageProject src={image} alt="Imagem principal do projeto"/>
                        {!underlineAll && <Line/>}
                    </Grid>
                    {underlineAll &&
                        <Grid item xs={device?6:12}>
                            <Line/>
                        </Grid>
                    }
                </>}
            </Grid>
        </Link>
    );
}

