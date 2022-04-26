import BiglogoSenai from '../src/Assets/img/BigLogoSenai.svg'
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
          padding:50px 0;
        }
        @media screen and (max-width:600px){
          p{
            padding:10px 0;
          }
        }
        @media screen and (max-width:900px){
          p{
            padding:25px 0;
          }
        }
        @media screen and (max-width:1200px){
          p{
            padding:40px 0;
          }
        }

      `}</style>
    </>
  );
}