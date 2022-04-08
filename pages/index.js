import BiglogoSenai from '../src/assets/img/BigLogoSenai.svg'
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/router';
import ButtonSenai from '../src/Components/ButtonSenai/ButtonSenai';

export default function apresentationPage(){
  const roteamento = useRouter();
  return(
    <>
      <section>
        <Container>
          <Grid
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            marginBottom='100px'
          >
            <Image
              src={BiglogoSenai} 
              unsized
              alt='Grande Logo Senai'
            />
          </Grid>
          <Grid>
            <ButtonSenai roteamento={roteamento}>
              <p>Entrar</p>
            </ButtonSenai>
          </Grid>
        </Container>
      </section>
      <style jsx>{`
        section{
          display:flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;  
        }
        p{
          font-size:55px;
          padding:60px 0;
        }
      `}</style>
    </>
  );
}