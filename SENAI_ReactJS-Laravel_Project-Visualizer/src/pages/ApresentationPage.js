import { Grid } from "@mui/material";
import { ButtonTextWrapper, ContainerAll, TextButton } from "../Styles/StylesApresentation";
import BigLogoSenai from '../Assets/img/BigLogoSenai.svg';
import ButtonSenai from "../Components/ButtonSenai/ButtonSenai";

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
            <ButtonTextWrapper>
              Entrar
            </ButtonTextWrapper>
          </TextButton>
        </ButtonSenai>
      </Grid>
    </ContainerAll>
  );
}

