import styled from "styled-components";
import { Box,Typography } from "@mui/material";


export const ContainerPrincipalContato = styled(Box)`
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${(props) => props.background || '#660000'};
          width: 100%;
          gap: 60px;
          height: ${(props) => props.height || "500px" };
          @media (max-width: 900px) {
            gap: 5px;
          }
`


export const ContainerTituloContato = styled(Box)`
            display: none;
            @media (max-width: 550px) {
             display: flex;
             padding: 15px;
             justify-content: center;
             align-items: center;
           }

`

export const TituloFormularioContato = styled(Box)`
                 font-family: "Bungee";
                  font-size: 20px;
                  color: white;
                  text-align: center;
                  @media (max-width: 280px) {
                    font-size: 18px,
                 }

`

export const ContainerFormasDeContato = styled(Box)`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 40%;
            gap: 1rem;
            margin-bottom: 2%;
            @media (max-width: 550px) {
              display: "none",
            }
 
`

export const ContainerConteudoFormasContato = styled(Box)`

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              gap: 1rem;
   
`


export const ContainerTituloFormasContato = styled(Box)`
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
   
`


export const TituloContato = styled(Box)`
                  font-family: "Bungee";
                  font-size: 35px;
                  color: white;
                  text-align: center;
                  @media (max-width: 1540px) {
                    font-size: 32px;
                  }
                  @media (max-width: 1080px){
                    font-size: 20px;
                  }
                  @media (max-width: 900px){
                    font-size: 28px;
                  }
   
`


export const ContainerLineContato = styled(Box)`

               display: flex;
              @media (max-width: 900px){
                  display: none 
              }
`


export const SubTituloContato = styled(Box)`

                font-family: "Montserrat";
                font-size: 20px;
                color: white;
                text-align: center;
                @media (max-width: 1540px){
                  font-size: 18px,
                }
                @media (max-width: 900px){
                  font-size: 12px
                }
   
`


export const ContainerListaFormasDeContato = styled(Box)`

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              gap: 0.2rem;
              margin-top: 0.2rem;

`

export const FormaContatoTelefone = styled(Box)`
                font-family: "Montserrat";
                font-size: 20px;
                color: white;
                text-align: center;
                @media (max-width: 1540px){
                  font-size: 18px;
                }
                @media (max-width: 900px){
                  font-size: 15px;
                }
   
`


export const FormaContatoInstagram = styled(Box)`
                font-family: "Montserrat";
                font-size: 20px;
                color: white;
                text-align: center;
                @media (max-width: 1540px){
                  font-size: 18px,
                }
                @media (max-width: 900px){
                  font-size: 15px
                }
   
`



export const FormaContatoEmail = styled(Box)`
                font-family: "Montserrat";
                font-size: 20px;
                color: white;
                text-align: center;
                @media (max-width: 1540px){
                  font-size: 18px,
                }
                @media (max-width: 900px){
                  font-size: 15px
                }
         
`

export const FormaContatoLocalizacao = styled(Box)`

              font-family: "Montserrat";
              font-size: 20px;
               color: white;
              @media (max-width: 1540px){
                font-size: 18px,
              }
              @media (max-width: 900px){
                font-size: 15px
              }
   
`


