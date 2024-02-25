import { Box } from "@mui/material";
import styled from "styled-components";

export const ContainerPrincipalSobre = styled(Box)`
  display: flex;
  height: 420px;
  background: #c10000;
  align-items: center;
  justify-content: center;
  @media (max-width: 1540px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 420px;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 480px;
  }
  @media (max-width: 280px) {
    width: 100%;
    height: 580px;
  }
`;

export const ContainerSubSobre = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 420px;
  background: #252525;
  border-bottom-right-radius: 380px;
  box-shadow: 2px 1px 15px rgba(0, 0, 0, 0.5);
  @media (max-width: 1540px) {
    width: 100%;
  }
  @media (max-width: 1080px) {
    width: 100%;
    border-bottom-right-radius: 150px;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 420px;
    border-bottom-right-radius: 150px;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 480px;
    border-bottom-right-radius: 100px;
  }
  @media (max-width: 280px) {
    width: 100%;
    height: 580px;
    border-bottom-right-radius: 100px;
  }
`;

export const ContainerSobreNos = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  width: 100%;
  gap: 2rem;
  @media (max-width: 1540px) {
    margin: 0 30px;
  }
  @media (max-width: 1366px) {
    margin: 0 30px;
    width: 95%;
  }
  @media (max-width: 1080px) {
    margin: 0px;
    width: 95%;
  }
  @media (max-width: 900px) {
    margin: 0px;
    width: 100%;
  }
`;

export const ContainerImgSobreNos = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 680px;
  @media (max-width: 1540px) {
    width: 650px;
  }
  @media (max-width: 1080px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContainerConteudoSobreNos = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  @media (max-width: 1080px) {
    width: 65%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const ContainerConteudoGeralSobreNos = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  gap: 1rem;
`;

export const TituloSobreNos = styled(Box)`
  font-family: bungee;
  font-size: 35px;
  color: white;
  @media (max-width: 1540px) {
    font-size: 25px;
  }
  @media (max-width: 1080px) {
    font-size: 25px;
  }
  @media (max-width: 900px) {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
  @media (max-width: 280px) {
    font-size: 18px;
  }
`;


export const ContainerLineSobreNos = styled(Box)`
        display: flex;
        justify-content: center;
        align-items: center;

`

export const ContainerDescricaoSobreNos = styled(Box)`
         display: flex;
         flex-direction: column;
         gap: 1rem;
         width: 90%;
         @media (max-width: 1540px) {
          width: 80%,
         } 
         @media (max-width: 1080px) {
                  width: 100%,
         } 
`

export const DescricaoSobreNos = styled(Box)`
             color: white;
             font-size: 14px;
             font-family: Montserrat;
             @media (max-width: 1540px) {
                  font-size: 12px,
              } 
             @media (max-width: 1080px) {
                  font-size: 10px,
             }
             @media (max-width: 900px) {
                  font-size: 12px,
             }
             @media (max-width: 550px) {
                  font-size: 10px,
             } 
`
