import { Grid } from "@mui/material";
import { ContainerAll, TextButton } from "../Styles/StylesApresentation";
import BigLogoSenai from '../assets/img/BigLogoSenai.svg';
import ButtonSenai from "../components/ButtonSenai/ButtonSenai";

export default function ApresentationPage(){
  return(
    <ContainerAll>
      <Grid
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        marginBottom='100px'
      >
        <img src={BigLogoSenai} alt=""/>
      </Grid>
      <Grid>
        <ButtonSenai rota="/listing-page">
          <TextButton>
            Entrar
          </TextButton>
        </ButtonSenai>
      </Grid>
    </ContainerAll>
  );
}